---
title: "evilgophish"
---


[evilgophish GitHub Repository](https://github.com/fin3ss3g0d/evilgophish)

evilgophish is a modified version of the Gophish phishing framework built specifically to evade detection and bypass common mail filters and security configurations.

## Key Modifications

*   **Header Customization**: Removes signatures in mail headers (like `X-Gophish-Signature` and `X-Gophish-Contact`) that filters flag.
*   **Static Path Obfuscation**: Alters standard URL patterns (like `/track` and `/rid`) to custom, random variables to prevent signature-based blocking by email proxies.

## Setup & Running

```bash
# Set execution permissions
chmod +x evilgophish

# Run evilgophish
./evilgophish
```
