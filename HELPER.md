## SOLID ##

### NODE

### INSTALL SOLID SERVER
STEPS FOR INSTALL

- Preprequisites:
    - SO CentOS 7
    - npm v6.13.4
- Instaling server solid
    - Run command:
    >$ npm install -g solid-server
- Get SSL certificate
    > $ yum install mod_ssl

    > $ yum install mod_ssl

    > $ openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc pki/tls/private/certificado.key -out /etc/ssl/certs/certificado.crt

-  File configuration `` server\config.json``
```
    {
  "root": "/root/Documentos/SOLID/server/data",
  "port": "8443",
  "serverUri": "https://localhost:8443",
  "webid": true,
  "mount": "/",
  "configPath": "./config",
  "configFile": "./config.json",
  "dbPath": "./.db",
  "sslKey": "/etc/pki/tls/private/certificado.key",
  "sslCert": "/etc/pki/tls/certs/certificado.crt",
  "multiuser": false,    
  "emailHost": "smtp.gmail.com",
  "emailPort": "587",
  "emailAuthUser": "monicafernandasanchez@gmail.com",
  "emailAuthPass": "XXXXXXXX",
  "server": {
    "name": "localhost",
    "description": "",
    "logo": ""
  }
}

```
- Run server: go to directory server/ an run command:

> $ DEBUG="SOLID:*" solid start


## ISSUES 

- Accion realizada para correción de 401 error al login.
- https://github.com/solid/node-solid-server/issues/1263


```:errors
    acl:Authorization;
    acl:accessTo <some-other-file.txt>;
    acl:agentGroup <group-listing-error.ttl#folks>;
    acl:mode acl:Read, acl:Write.
  ``` 


### DOCKER 
- Se montará un servidor docker 
- COmmands: 
``` docker stop $(docker ps -q)  
#Eliminar imagenes de docker
docker image prune 
docker volume prune
docker system prune –volumes –images 
docker system prune --all
docker volume rm my-name 
```

### REFERENCES
- SOLID SERVER INSTALATION
https://www.npmjs.com/package/solid-server
- CERTIFICATE SSL
https://latinsource.wordpress.com/2017/07/06/certificados-ssl-centos-7/
