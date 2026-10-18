---
title: "NMAP"
---


## Host Discovery

```bash
sudo nmap -sn 192.168.1.0/24
```

## Port Scanning

* Top 1000

```bash
nmap -Pn $IP
```

* All ports

```bash
nmap -Pn -p- $IP
```

* Specific ports

```bash
nmap -Pn -p 80,443,8080 $IP
```

* Port range

```bash
nmap -Pn -p1-10000 $IP
```

* Fast scan

```bash
nmap -Pn -F $IP
```

* UDP scan

```bash
nmap -Pn -sU $IP
```

* Service detection (fast mode)

```bash
nmap -Pn -F -sV $IP
```

* OS detection (fast mode)

```bash
nmap -Pn -F -sV -O $IP
```

* NMAP **Scripts**

```bash
nmap -Pn -F -sV -O -sC $IP
```

* Agressive scan (combine sV, O and sC)

```bash
nmap -Pn -F -A $IP
```

* Fastest Timing template (T0 → T5)

```bash
nmap -Pn -T5 -F -A $IP
```

* Export result

```bash
nmap -Pn -T5 -F -A $IP -oN output.txt

nmap -Pn -T5 -F -A $IP -oX output.xml
```
