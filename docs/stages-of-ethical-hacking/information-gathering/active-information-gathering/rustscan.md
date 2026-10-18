---
title: "RustScan"
description: ">-"
---




## ✨ Features

* Scans all 65k ports in **3 seconds**.
* Full scripting engine support. Automatically pipe results into Nmap, or use our scripts (or write your own) to do whatever you want.
* Adaptive learning. RustScan improves the more you use it. No bloated machine learning here, just basic maths.
* The usuals you would expect. IPv6, CIDR, file input and more.
* Automatically pipes ports into Nmap.

[RustScan GitHub Repository](https://github.com/RustScan/RustScan)

## Installation

```bash
brew install rustscan
```

## Default Scan

```bash
# Simple Scan
rustscan -a $DOMAIN

# Increase speed with ulimit (can cause rejection of host)
rustscan -a $DOMAIN --ulimit 5000

# Specify port
rustscan -a $DOMAIN -p 443

# Multiple ports
rustscan -a $DOMAIN -p 443,80,3306,9000,8080

# External list of hosts
rustscan -a 'hosts.txt'

# Range of ports
rustscan -a $DOMAIN --range 1-1000

# Scan network
rustscan -a 192.168.0.0/24
```

## Advanced Scan

```bash
# Pass custom Nmap arguments (everything after '--' is passed to Nmap)
rustscan -a $DOMAIN -- -A -sC

# Adjust batch size (maximum number of concurrent sockets)
rustscan -a $DOMAIN --batch-size 4500

# Specify scan timeout in milliseconds
rustscan -a $DOMAIN --timeout 1500

# Top ports scan (scans top 1000 ports)
rustscan -a $DOMAIN --top
```

## Scripts

```bash
# Run a custom script against open ports
rustscan -a $DOMAIN --script "custom-script.sh"

# Run built-in scripting commands (like piping to a custom web scanner)
rustscan -a $DOMAIN -s "gobuster"
```
