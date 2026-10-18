---
title: "SMBMap"
---


## Basic sintax

```bash
smbmap -u guest -p "" -d . -H $IP

smbmap -u administrator -p "$password_123" -d . -H $IP
```

### Remote commands

#### Run any command

```bash
smbmap  -H $IP -u administrator -p "$password_123" -x 'ipconfig'
```

#### Read SMB volume

```bash
smbmap  -H $IP -u administrator -p "$password_123" -r 'C$'
```

#### Upload file

```bash
smbmap  -H $IP -u administrator -p "$password_123" --upload '/tmp/trojan' 'C$\trojan'
```

#### Download file

```bash
smbmap  -H $IP -u administrator -p "$password_123" --download 'C$\download_file.txt'
```
