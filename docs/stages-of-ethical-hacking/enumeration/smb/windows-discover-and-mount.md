---
title: "Windows discover & Mount"
description: "Default port of SMB 139 and 445"
---




## Discover

* Start with a nmap scan

```shell
nmap -T4 $IP_RANGE/24 --open
```

![](../../../assets/image-8-2.png)

* After the servers with **SMB** services were discovered, run a more deep and detailed scan

```shell
nmap -T4 $IP -sV -sC
```



## Mount

```powershell
net use Z: \\10.0.0.1\C$ smbserver_111 /user:administrator
```





