---
title: "Subdomain"
---


## Subfinder

```bash
subfinder -d $TARGET -silent | httpx -silent -o url.txt
```

## Gospider


```bash
gospider -d 0 -s "https://$DOMAIN" -c 5 -t 100 -d 5 --blacklist jpg,jpeg,gif,css,tif,tiff,png,ttf,woff,woff2,ico,pdf,svg,txt | grep -Eo '(http|https)://[^/"]+' | anew
```

