---
title: "Nikto"
description: ">-"
---




## Installation and introduction

[Nikto GitHub Repository](https://github.com/sullo/nikto)

## Default scan

```bash
# HTTP
nikto -h $DOMAIN

# HTTPS
nikto -h $DOMAIN -ssl

# Use domains from file
nikto -h domains.txt
```

#### Output&#x20;

```bash
# Simple
nikto -h $DOMAIN -o output.txt

# CSV format
nikto -h $DOMAIN -o output.csv -Format csv
```

#### Integration with metasploit

```bash
nikto -h $DOMAIN -Format msf+
```

## Advanced scan

```bash
# Scan through a proxy
nikto -h $DOMAIN -useproxy http://127.0.0.1:8080

# Specify custom ports
nikto -h $DOMAIN -p 80,443,8080

# Specify basic authentication credentials
nikto -h $DOMAIN -id admin:password

# Disable response caching
nikto -h $DOMAIN -nocache

# Specify tuning options (e.g., 1=interesting files, 3=IIS bugs, 4=CGI, x=reverse tuning)
nikto -h $DOMAIN -Tuning 134
```
