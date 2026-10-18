---
title: "EvilURL"
---


[EvilURL GitHub Repository](https://github.com/UndeadSec/EvilURL)

EvilURL is an IDN homograph attack generator tool used to generate spoofed unicode domains that look identical to legitimate target domains to deceive users in phishing campaigns.

## Installation & Running

```bash
# Clone and navigate to the directory, then run the python script
python3 evilurl.py
```

## Spoof Generation

*   **Interactive Menu**: Run the script and choose options to input a target domain (e.g. `google.com`) and choose characters to replace (e.g. Cyrillic `о` instead of Latin `o`).
*   **Punycode Resolution**: The tool automatically outputs the punycode representation (e.g. `xn--gogle-e1a.com`) which can be registered at domain registrars.
