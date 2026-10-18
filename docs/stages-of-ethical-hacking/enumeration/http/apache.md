---
title: "Apache"
description: ">-"
---




## Enum

```bash
nmap $IP -p 80 -sV -O

nmap $IP -p 80 -sV --script banner

whatweb $IP

http $IP

dirb http://$IP 

browsh --startup-url $IP

lynx http://$IP

# Metasploit version
msfconsole
use auxiliary/scanner/http/http_version
set rhosts $IP
run

# Metasploit directiries
msfconsole
use auxiliary/scanner/http/brute_dirs
set rhosts $IP
run

#robots.txt
msfconsole
use auxiliary/scanner/http/robots_txt
set rhosts $IP
run
```
