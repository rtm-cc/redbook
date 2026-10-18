---
title: "DNS Zone Transfers"
---


## DNS Enum

```bash
dnsenum --private --subfile domains.txt -s 30 $DOMAIN_NAME
```

## dig

```bash
dig axft @nsztm1.digi.ninja zonetransfer.me
```

## fierce

```bash
fierce --domain $DOMAIN_NAME
```
