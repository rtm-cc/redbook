---
title: "IIS"
description: ">-"
---




## Enum

```bash
nmap $IP -sV -O

whatweb $IP

http $IP

dirb http://$IP

browsh --startup-url http://$IP.Default.aspx
```

### Nmap scripts

```bash
# Interesting folders
nmap $IP -sV -p 80 --script http-enum

# Verify if XSS is off
nmap $IP -sV -p 80 --script http-headers

# Replace $PATH with any folder, i.e. /webdav/
nmap $IP -sV -p 80 --script http-methods --script-args http-methods.url-path=/$PATH/

# webdav
nmap $IP -sV -p 80 --script http-webdav-scan --script-args http-methods.url-path=/webdav/
```

> **WebDAV** (**Web Distributed Authoring and Versioning**) is a set of extensions to the [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext\_Transfer\_Protocol) (HTTP), which allows [user agents](https://en.wikipedia.org/wiki/User\_agent) to collaboratively author contents _directly_ in an [HTTP web server](https://en.wikipedia.org/wiki/Web\_server) by providing facilities for [concurrency control](https://en.wikipedia.org/wiki/Concurrency\_control) and [namespace operations](https://en.wikipedia.org/wiki/Namespace), thus allowing [Web](https://en.wikipedia.org/wiki/World\_Wide\_Web) to be viewed as a _writeable, collaborative medium_ and not just a read-only medium
