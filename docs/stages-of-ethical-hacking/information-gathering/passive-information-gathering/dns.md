---
title: "⭐ DNS"
---

## DNS Dumpster

[DNS Dumpster website](https://dnsdumpster.com)

![](../../../assets/image-1-2.png)

## dnsrecon

### Command

```
dnsrecon
```

### Usage

```bash
dnsrecon -d $DOMAIN_NAME
```

### Example

```bash
dnsrecon -d tesla.com     
[*] std: Performing General Enumeration against: tesla.com...
[-] All nameservers failed to answer the DNSSEC query for tesla.com
[*]      SOA edns69.ultradns.com 204.74.66.69
[*]      SOA edns69.ultradns.com 2001:502:f3ff::245
[*]      NS a1-12.akam.net 193.108.91.12
[*]      Bind Version for 193.108.91.12 "27317.122"
[*]      NS a1-12.akam.net 2600:1401:2::c
[*]      NS a12-64.akam.net 184.26.160.64
[*]      Bind Version for 184.26.160.64 "29250.244"
[*]      NS a12-64.akam.net 2600:1480:f000::40
[*]      NS a7-66.akam.net 23.61.199.66
[*]      Bind Version for 23.61.199.66 "36088.110"
[*]      NS a7-66.akam.net 2600:1406:32::42
[*]      NS edns69.ultradns.com 204.74.66.69
[*]      Bind Version for 204.74.66.69 Resolver"
[*]      NS edns69.ultradns.com 2001:502:f3ff::245
[*]      NS a9-67.akam.net 184.85.248.67
[*]      Bind Version for 184.85.248.67 "27317.122"
[*]      NS a9-67.akam.net 2a02:26f0:117::43
[*]      NS a10-67.akam.net 96.7.50.67
[*]      Bind Version for 96.7.50.67 "36088.108"
[*]      NS a28-65.akam.net 95.100.173.65
[*]      Bind Version for 95.100.173.65 "35218.242"
[*]      MX tesla-com.mail.protection.outlook.com 104.47.56.138
[*]      MX tesla-com.mail.protection.outlook.com 104.47.58.138
[*]      A tesla.com 184.30.18.203
[*]      A tesla.com 23.9.66.10
[*]      A tesla.com 96.16.108.43
[*]      A tesla.com 23.201.26.71
[*]      A tesla.com 104.119.104.74
[*]      A tesla.com 184.85.228.70
[*]      TXT tesla.com zapier-domain-verification-challenge=64e810e8-0fe1-4de0-b104-229592811c5b
[*]      TXT tesla.com adobe-idp-site-verification=321c026a-3a8c-4206-a1fa-391a59585c54
[*]      TXT tesla.com MS=ms22358213
[*]      TXT tesla.com teamviewer-sso-verification=2fc989f75b19494fab5eb0e2c22dd625
[*]      TXT tesla.com 55zNJIDU0xk94IfGJtL+Hh+wje5JzOS6GY+ntggZF908AUsx0LBKgr+Nln3CgZEUifxSuN09M05jYpdbd6+cpw==
[*]      TXT tesla.com docker-verification=74d1ec4e-a7a6-48a7-9568-9bd0faac833f
[*]      TXT tesla.com T0E0S29854
[*]      TXT tesla.com v=spf1 ip4:54.240.84.225/32 ip4:54.240.84.226/31 ip4:54.240.84.228/30 ip4:54.240.84.232/29 ip4:54.240.84.240/29 ip4:54.240.84.248/30 ip4:54.240.84.252/32 ip4:44.239.249.139 ip4:52.24.70.112 ip4:34.223.204.78 ip4:213.244.145.203 ip4:213.244.145.219 ip4:213.244.145.204 ip4:213.244.145.220 ip4:8.47.24.203 ip4:8.47.24.219 ip4:8.47.24.204 ip4:8.47.24.220 ip4:8.45.124.203 ip4:8.45.124.219 ip4:8.45.124.204 ip4:8.45.124.220 ip4:8.21.14.203 ip4:8.21.14.219 ip4:8.21.14.204 ip4:8.21.14.220 ip4:8.21.14.194 ip4:8.21.14.211 ip4:212.49.145.0/24 ip4:91.103.52.0/22 ip4:168.245.123.10 ip4:216.81.144.165 ip4:149.72.247.52 ip4:149.72.134.64 ip4:149.72.152.236 ip4:149.72.163.58 ip4:149.72.172.170 ip4:167.89.90.62 ip4:158.228.129.79 ip4:216.81.144.165 ip4:117.50.14.178 ip4:117.50.35.199 include:u13494342.wl093.sendgrid.net include:spf.protection.outlook.com include:mail.zendesk.com include:_spfsn.teslamotors.com include:_spf.qualtrics.com include:_spf.ultipro.com include:_spf.psm.knowbe4.com -all
[*]      TXT tesla.com google-site-verification=Y7lbse5bSatjXaqSBOWXjsit4mOp9cQzfLDpnQUSZlg
[*]      TXT tesla.com bugcrowd-verification=40bd5dd89a6e4073ca9bc76feac3a47b
[*]      TXT tesla.com adobe-sign-verification=efb2da198047b7a154bd604d2721038b
[*]      TXT tesla.com SFMC-qkAv7SvlQaslp7NEALX8t68s_AZWOQB6ThKQS5l5
[*]      TXT tesla.com traction-guest=b4f7ad59-bf17-4b3c-8b36-9c2d28f1de32
[*]      TXT tesla.com logmein-domain-confirmation=9zxwVn2buGWrLtU24J88
[*]      TXT tesla.com apple-domain-verification=C9J7eOtEbm7Dqr88
[*]      TXT _dmarc.tesla.com v=DMARC1; p=reject; pct=100; rua=mailto:n2ju30bc@ag.dmarcian.com; ruf=mailto:n2ju30bc@fr.dmarcian.com; fo=1
[*] Enumerating SRV Records
[+]      SRV _sip._tls.tesla.com sipdir.online.lync.com 52.112.192.139 443
[+]      SRV _sip._tls.tesla.com sipdir.online.lync.com 2603:1027:0:48::20 443
[+]      SRV _sipfederationtls._tcp.tesla.com sipfed.online.lync.com 52.112.192.11 5061
[+]      SRV _sipfederationtls._tcp.tesla.com sipfed.online.lync.com 2603:1027:0:48::c 5061
[+] 4 Records Found
```
