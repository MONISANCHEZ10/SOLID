## SOLID ##

### NODE

### INSTALL SOLID SERVER
STEPS FOR INSTALL

- Preprequisitos:
    - SO CentOS 7
    - npm v6.13.4
- Instaling server solid
    - Run command:
    >$ npm install -g solid-server
- Get SSL certificate
    > $ yum install mod_ssl

    > $ yum install mod_ssl

    > $ openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc pki/tls/private/certificado.key -out /etc/ssl/certs/certificado.crt




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
- Eliminar imagenes de docker
``` docker stop $(docker ps -q)  
docker image prune 
docker volume prune
docker system prune –volumes –images 
docker system prune --all
docker volume rm my-name 
```