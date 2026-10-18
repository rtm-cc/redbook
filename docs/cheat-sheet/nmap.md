---
title: "Nmap"
description: "Network exploration tool and security / port scanner cheat sheet"
---

Nmap (Network Mapper) is an open-source tool for network exploration and security auditing. It is designed to rapidly scan large networks.

### Scan Techniques

| **Command** | **Description** |
| :--- | :--- |
| `nmap -sS <target>` | SYN Scan (Stealth/Half-open scan, default for root/sudo) |
| `nmap -sT <target>` | TCP Connect Scan (Default for non-root users, completes 3-way handshake) |
| `nmap -sU <target>` | UDP Scan (Slow, sends UDP packets to check for open UDP ports) |
| `nmap -sA <target>` | ACK Scan (Determines if ports are filtered/unfiltered by a firewall) |
| `nmap -sF <target>` | FIN Scan (Sends a FIN packet; useful to bypass stateful firewalls) |
| `nmap -sX <target>` | Xmas Scan (Sets FIN, PSH, and URG flags; lights up packet like a Xmas tree) |
| `nmap -sN <target>` | Null Scan (Sets no flags in the TCP header) |

### Host Discovery

| **Command** | **Description** |
| :--- | :--- |
| `nmap -sn <target>` | Ping Scan (Disable port scan, only discover active hosts) |
| `nmap -Pn <target>` | Treat all hosts as online (Skip host discovery/ping check) |
| `nmap -PE <target>` | ICMP Echo Request ping |
| `nmap -PP <target>` | ICMP Timestamp ping |
| `nmap -PM <target>` | ICMP Address Mask ping |
| `nmap -PS<ports> <target>` | TCP SYN Ping to specified ports |
| `nmap -PA<ports> <target>` | TCP ACK Ping to specified ports |
| `nmap -PR <target>` | ARP Ping (Only works on the local subnet) |

### Port Specification & Scan Order

| **Command** | **Description** |
| :--- | :--- |
| `nmap -p 22 <target>` | Scan specific port (e.g., port 22) |
| `nmap -p 22,80,443 <target>` | Scan multiple comma-separated ports |
| `nmap -p 1-1000 <target>` | Scan a range of ports |
| `nmap -p- <target>` | Scan all 65,535 TCP ports |
| `nmap -p U:53,T:21-25 <target>` | Scan specific UDP and TCP ports |
| `nmap -F <target>` | Fast mode (Scan the top 100 most common ports) |
| `nmap -r <target>` | Scan ports sequentially (No randomization) |
| `nmap --top-ports 500 <target>` | Scan top N most common ports (e.g., 500) |

### Service & Version Detection

| **Command** | **Description** |
| :--- | :--- |
| `nmap -sV <target>` | Probe open ports to determine service/version info |
| `nmap -sV --version-intensity 9 <target>` | Set version scan intensity (0 to 9; higher is more thorough) |
| `nmap -O <target>` | Enable Operating System detection |
| `nmap -A <target>` | Enable OS detection, version detection, script scanning, and traceroute |

### Timing & Performance

| **Command** | **Description** |
| :--- | :--- |
| `nmap -T0 <target>` | Paranoid (Extremely slow, bypasses IDS) |
| `nmap -T1 <target>` | Sneaky (Slow, bypasses IDS) |
| `nmap -T2 <target>` | Polite (Slows down to consume less bandwidth) |
| `nmap -T3 <target>` | Normal (Default speed) |
| `nmap -T4 <target>` | Aggressive (Fast, optimized for modern networks) |
| `nmap -T5 <target>` | Insane (Extremely fast, potential packet loss/unreliable) |

### Nmap Scripting Engine (NSE)

| **Command** | **Description** |
| :--- | :--- |
| `nmap --script=default <target>` | Run default set of scripts (equivalent to `-sC`) |
| `nmap --script=safe <target>` | Run scripts that are safe/non-intrusive |
| `nmap --script=vuln <target>` | Run vulnerability check scripts |
| `nmap --script=exploit <target>` | Run scripts that actively exploit vulnerabilities |
| `nmap --script=http-sitemap-generator <target>` | Run specific script by name |
| `nmap --script="http-*" <target>` | Run all scripts starting with 'http-' |
| `nmap --script-args=http.useragent="Mozilla" <target>`| Run scripts with custom arguments |

### Output Options

| **Command** | **Description** |
| :--- | :--- |
| `nmap -oN scan.txt <target>` | Save scan results in normal format |
| `nmap -oG scan.gnmap <target>` | Save scan results in grepable format |
| `nmap -oX scan.xml <target>` | Save scan results in XML format |
| `nmap -oA scan <target>` | Save scan results in all three formats simultaneously |
