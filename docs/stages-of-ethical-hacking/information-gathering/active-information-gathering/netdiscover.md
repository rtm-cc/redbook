---
title: "netdiscover"
---


Netdiscover is an active/passive address reconnaissance tool, mainly developed for those wireless networks without dhcp server, when you are wardriving. It can be also used on hub/switched networks.

Built on top of libnet and libpcap, it can passively detect online hosts, or search for them, by actively sending ARP requests.

Netdiscover can also be used to inspect your network ARP traffic, or find network addresses using auto scan mode, which will scan for common local networks.

Netdiscover uses the OUI table to show the vendor of the each MAC address discovered and is very useful for security checks or in pentests.

```bash
sudo netdiscover -i eth0 -r 10.0.2.0/24
```

![](../../../assets/image-7-1.png)
