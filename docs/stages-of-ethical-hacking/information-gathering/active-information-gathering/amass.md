---
title: "Amass"
---


OWASP Amass is a command-line tool used to perform passive and active network mapping and subdomain discovery.

[OWASP Amass GitHub Repository](https://github.com/owasp-amass/amass)

## Subdomain Enumeration (Active/Passive)

```bash
# Passive subdomain enumeration (safest, relies only on external APIs)
amass enum -passive -d $DOMAIN

# Active subdomain enumeration (includes DNS queries and certificate extraction)
amass enum -active -d $DOMAIN

# Active enumeration with custom DNS resolvers
amass enum -active -d $DOMAIN -r 8.8.8.8,1.1.1.1
```

## Passive Intelligence (Target Discovery)

```bash
# Discover ASN and related CIDRs belonging to an organization
amass intel -org "Organization Name"

# Search passive sources for IP address range mappings
amass intel -active -addr 192.168.0.1-254

# Discover related domains via reverse WHOIS search
amass intel -whois -d $DOMAIN
```

## Database Queries & Tracking

```bash
# List all subdomains discovered in past scans from the local DB
amass db -names -d $DOMAIN

# Compare differences between different scan dates
amass track -d $DOMAIN
```
