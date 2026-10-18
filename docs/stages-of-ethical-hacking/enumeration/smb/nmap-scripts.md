---
title: "NMAP Scripts"
---


:star:[Scripts Link](https://nmap.org/nsedoc/scripts/)

[Lib Link](https://nmap.org/nsedoc/lib/)

* Script list

```bash
nmap -p445 --script smb-protocols $IP

nmap -p445 --script smb-security-mode $IP

nmap -p445 --script smb-enum-sessions $IP

nmap -p445 --script smb-enum-sessions --script-args smbusername=administrator,smbpassword=smbserver_111 $IP

nmap -p445 --script smb-enum-shares $IP

nmap -p445 --script smb-enum-shares --script-args smbusername=administrator,smbpassword=smbserver_111 $IP

nmap -p445 --script smb-enum-users --script-args smbusername=administrator,smbpassword=smbserver_111 $IP

nmap -p445 --script smb-server-stats --script-args smbusername=administrator,smbpassword=smbserver_111 $IP

nmap -p445 --script smb-enum-domains --script-args smbusername=administrator,smbpassword=smbserver_111 $IP

nmap -p445 --script smb-enum-groups --script-args smbusername=administrator,smbpassword=smbserver_111 $IP

nmap -p445 --script smb-enum-services  --script-args smbusername=administrator,smbpassword=smbserver_111 $IP

nmap -p445 --script smb-enum-shares,smb-ls  --script-args smbusername=administrator,smbpassword=smbserver_111 $IP
```



:::note
The <mark style="background-color:orange;"></mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">IPC$<mark style="color:red;"> share is also known as a null session connection. By using this session, Windows lets anonymous users perform certain activities, such as enumerating the names of domain accounts and network shares.

The IPC$ share is created by the Windows Server service. This special share exists to allow for subsequent named pipe connections to the server. The server's named pipes are created by built-in operating system components and by any applications or services that are installed on the system. When the named pipe is being created, the process specifies the security that is associated with the pipe, and then makes sure that access is only granted to the specified users or groups
:::

