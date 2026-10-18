---
title: "Shodan"
---


The Shodan Command Line Interface (CLI) is useful for automated queries and host exploration.

[Shodan CLI GitHub Repository](https://github.com/achillean/shodan-python)

## CLI Initialization

```bash
# Initialize with your Shodan API key
shodan init $API_KEY
```

## Default Queries

```bash
# Query information about a specific IP address
shodan host 8.8.8.8

# Search Shodan using standard search query filters
shodan search "port:22 os:linux"

# Get a count of search results
shodan count "port:445 country:US"

# Check your current account balance and details
shodan info
```

## Advanced Search & Data Export

```bash
# Download search results to a file (saves JSON format)
shodan download output_file "port:3389"

# Parse and read the downloaded data file
shodan parse --fields ip_str,port,org output_file.json.gz

# Check your public-facing IP address
shodan myip
```
