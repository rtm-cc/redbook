---
title: "King Phisher"
---


[King Phisher GitHub Repository](https://github.com/rsmusllp/king-phisher)

King Phisher is a tool used to test and promote user security awareness by simulating real-world phishing attacks.

## Server Setup & Running

```bash
# Start the King Phisher server (requires server_config.yml)
sudo ./KingPhisherServer server_config.yml

# Run server in debug mode to trace connections and campaign logs
sudo ./KingPhisherServer server_config.yml --debug
```

## Client Campaign Setup

```bash
# Launch the graphical user client interface
./KingPhisher

# Load specific campaigns and templates directly
./KingPhisher --campaign-id 12
```
