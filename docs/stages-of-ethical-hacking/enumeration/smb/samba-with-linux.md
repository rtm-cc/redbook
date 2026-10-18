---
title: "Samba with Linux"
---

## Enumeration

With nmap `-sV` we can do an educated guess if the server is using <mark style="background-color:blue;">windows</mark> or <mark style="background-color:purple;">linux</mark>

```shell
-
# TCP
nmap $IP -sV -p 139,445

# UDP
nmap $IP -sU --top-port 25 --open

# Via scripts
nmap $IP -p 445 --script smb-os-discovery
```

![](../../../assets/image-11-1.png)

## Metasploit way

### smb version

```bash
msfconsole
use auxiliary/scanner/smb/smb_version
set rhosts $IP
run
```

### shares

```bash
msfconsole
use auxiliary/scanner/smb/smb_enumshares
set rhosts $IP
run
```

## nmblookup

```shell
nmblookup -A $IP

```

## rpcclient

```bash
rpcclient -U "" -N $IP

srvinfo

enumdomusers

lookupnames admin
```

## enum4linux

```bash
# get OS
enum4linux -o $IP

# get users
enum4linux -U $IP

# get sharelist
enum4linux -S $IP

```

## # smbclient

To connect to smb shares

```bash
nmbclient -L $IP -N 

nmbclient //$IP/Public -N 
```
