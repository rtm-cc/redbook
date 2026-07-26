import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://rtm-cc.github.io",
  base: "/redbook",
  integrations: [
    starlight({
      title: "📕 The Red Book",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/rtm-cc/redbook"
        }
      ],
      sidebar: [
        {
          label: "📕 The Red Book",
          slug: "index"
        },
        {
          label: "Introduction",
          slug: "introduction"
        },
        {
          label:
            "🦳 Stages of Ethical Hacking",
          items: [
            {
              label:
                "1️⃣ Information Gathering",
              items: [
                {
                  label: "Overview",
                  slug: "stages-of-ethical-hacking/information-gathering"
                },
                {
                  label:
                    "Active Information Gathering",
                  items: [
                    {
                      label: "Overview",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering"
                    },
                    {
                      label:
                        "DNS Zone Transfers",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering/dns-zone-transfers"
                    },
                    {
                      label: "NMAP",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering/nmap"
                    },
                    {
                      label:
                        "netdiscover",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering/netdiscover"
                    },
                    {
                      label: "sqlMap",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering/sqlmap"
                    },
                    {
                      label: "Nikto",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering/nikto"
                    },
                    {
                      label: "Shodan",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering/shodan"
                    },
                    {
                      label: "RustScan",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering/rustscan"
                    },
                    {
                      label: "Amass",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering/amass"
                    },
                    {
                      label: "fping",
                      slug: "stages-of-ethical-hacking/information-gathering/active-information-gathering/fping"
                    }
                  ]
                },
                {
                  label:
                    "Passive Information Gathering",
                  items: [
                    {
                      label: "Overview",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering"
                    },
                    {
                      label:
                        "Website Recon & Footprinting",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/website-recon-and-footprinting"
                    },
                    {
                      label:
                        "Whois Enumeration",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/whois-enumeration"
                    },
                    {
                      label: "Netcraft",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/netcraft"
                    },
                    {
                      label: "⭐ DNS",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/dns"
                    },
                    {
                      label:
                        "Identify if site is protected by firewall or proxy - wafw00f",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/identify-if-site-is-protected-by-firewall-or-proxy-wafw00f"
                    },
                    {
                      label:
                        "Subdomain Enumeration - Sublist3r",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/subdomain-enumeration-sublist3r"
                    },
                    {
                      label:
                        "❌ theHarvester (borked)",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/theharvester-borked"
                    },
                    {
                      label:
                        "Email gathering",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/email-gathering"
                    },
                    {
                      label:
                        "Leaked Password Databases",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/leaked-password-databases"
                    },
                    {
                      label:
                        "Certificates",
                      slug: "stages-of-ethical-hacking/information-gathering/passive-information-gathering/certificates"
                    }
                  ]
                }
              ]
            },
            {
              label: "2️⃣ Enumeration",
              items: [
                {
                  label: "Overview",
                  slug: "stages-of-ethical-hacking/enumeration"
                },
                {
                  label: "SMB",
                  items: [
                    {
                      label: "Overview",
                      slug: "stages-of-ethical-hacking/enumeration/smb"
                    },
                    {
                      label:
                        "Windows discover & Mount",
                      slug: "stages-of-ethical-hacking/enumeration/smb/windows-discover-and-mount"
                    },
                    {
                      label:
                        "NMAP Scripts",
                      slug: "stages-of-ethical-hacking/enumeration/smb/nmap-scripts"
                    },
                    {
                      label: "SMBMap",
                      slug: "stages-of-ethical-hacking/enumeration/smb/smbmap"
                    },
                    {
                      label:
                        "Samba with Linux",
                      slug: "stages-of-ethical-hacking/enumeration/smb/samba-with-linux"
                    },
                    {
                      label:
                        "Dictionary Attack",
                      slug: "stages-of-ethical-hacking/enumeration/smb/dictionary-attack"
                    }
                  ]
                },
                {
                  label: "FTP",
                  slug: "stages-of-ethical-hacking/enumeration/ftp"
                },
                {
                  label: "SSH",
                  slug: "stages-of-ethical-hacking/enumeration/ssh"
                },
                {
                  label: "HTTP",
                  items: [
                    {
                      label: "Overview",
                      slug: "stages-of-ethical-hacking/enumeration/http"
                    },
                    {
                      label:
                        "Subdomain",
                      slug: "stages-of-ethical-hacking/enumeration/http/subdomain"
                    },
                    {
                      label: "IIS",
                      slug: "stages-of-ethical-hacking/enumeration/http/iis"
                    },
                    {
                      label: "Apache",
                      slug: "stages-of-ethical-hacking/enumeration/http/apache"
                    }
                  ]
                },
                {
                  label: "SQL",
                  slug: "stages-of-ethical-hacking/enumeration/sql"
                }
              ]
            },
            {
              label:
                "3️⃣ Vulnerability Assessment",
              items: [
                {
                  label: "Overview",
                  slug: "stages-of-ethical-hacking/vulnerability-assessment"
                },
                {
                  label: "Nessus",
                  slug: "stages-of-ethical-hacking/vulnerability-assessment/nessus"
                }
              ]
            }
          ]
        },
        {
          label:
            "💾 System/Host Based Attacks",
          items: [
            {
              label: "🪟 Windows",
              items: [
                {
                  label: "Overview",
                  slug: "system-host-based-attacks/windows"
                },
                {
                  label:
                    "Frequently exploited Windows Services",
                  slug: "system-host-based-attacks/windows/frequently-exploited-windows-services"
                }
              ]
            },
            {
              label: "🐧 Linux",
              slug: "system-host-based-attacks/linux"
            }
          ]
        },
        {
          label: "🥽 Dorks",
          items: [
            {
              label: "Google",
              items: [
                {
                  label: "Overview",
                  slug: "dorks/google"
                },
                {
                  label: "Cheatsheet",
                  slug: "dorks/google/cheatsheet"
                },
                {
                  label: "Examples",
                  slug: "dorks/google/examples"
                }
              ]
            },
            {
              label: "Extra",
              slug: "dorks/extra"
            }
          ]
        },
        {
          label: "🎣 Phishing",
          items: [
            {
              label: "Gophish",
              slug: "phishing/gophish"
            },
            {
              label: "evilgophish",
              slug: "phishing/evilgophish"
            },
            {
              label: "King Phisher",
              slug: "phishing/king-phisher"
            },
            {
              label: "EvilURL",
              slug: "phishing/evilurl"
            }
          ]
        },
        {
          label: "🔎 OSINT",
          items: [
            {
              label: "Temporary links",
              slug: "osint/temporary-links"
            }
          ]
        },
        {
          label: "👾 Data exfiltration",
          items: [
            {
              label: "Temporary links",
              slug: "data-exfiltration/temporary-links"
            }
          ]
        },
        {
          label: "🐝 OWASP",
          items: [
            {
              label: "Top10",
              slug: "owasp/top10"
            }
          ]
        },
        {
          label: "📙 Cheat Sheet",
          items: [
            {
              label: "Curl",
              slug: "cheat-sheet/curl"
            },
            {
              label: "Nmap",
              slug: "cheat-sheet/nmap"
            },
            {
              label: "Reverse Shells",
              slug: "cheat-sheet/reverse-shells"
            },
            {
              label: "Netcat & Socat",
              slug: "cheat-sheet/netcat-socat"
            },
            {
              label:
                "Linux Privilege Escalation",
              slug: "cheat-sheet/linux-privesc"
            },
            {
              label:
                "Windows Privilege Escalation",
              slug: "cheat-sheet/windows-privesc"
            }
          ]
        }
      ],
      customCss: [
        "./src/styles/custom.css"
      ]
    })
  ]
});
