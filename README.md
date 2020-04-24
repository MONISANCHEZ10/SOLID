
# SOLID
##

* [ESTRUCTURA DEL PROYECTO](#ESTRUCTURA-DEL-PROYECTO)
* [INSTALACION SOLID EN UN HOST](#INSTALACION-SOLID-EN-UN-HOST)
* [REQUISITOS DE SOFTWARE](#REQUISITOS-DE-SOFTWARE)

###

## ESTRUCTURA DEL PROYECTO ##

```
.
├── App                         -DIR donde se instalará la data de solid cofig/data
│   ├── Certificates            - Certificados necesarios para inicio de solid       
│   │   ├── fullchain.pem       
│   │   └── privkey.pem
├── config.json                 - Archio de configuración para solid       
├── docker-compose.yml          - Docker-compose principal
├── Dockerfile  
│   └── Dockerfile              - Service Cnetos 8 y Solid Server
├── HELPER.md                   - Archivo de ayuda con commandos principales
└── README.md                   - Estrucutra e inicio del proyecto.

``` 
## REQUISITOS DE SOFTWARE ##
- SO Cetos/Ubuntu
- npm v6.13.4
- Docker 19.03
- Docker-compose 1.25.5
- Imagen docker hub CentOS 8

## INICIAR SOLID_SERVER CON DOCKER 

- Descargar/clonar proyecto:

``> https://github.com/MONISANCHEZ10/SOLID.git ``

- luego en el directorio del proyecto principal ``cd /SOLID`` ejecutar :

``> docker-compose up  ``
Resultado:
```
localhost@SOLID# sudo docker-compose up
Creating solid_solid-server_1 ... done
Attaching to solid_solid-server_1
solid-server_1  | Solid server (5.2.4) running on https://localhost:8443/
solid-server_1  | Press <ctrl>+c to stop

```
- Ahora en el navegador nos dirigimos a ``https://localhost:8443/`` y podremos crear pods e interactuar con usuarios del mismo servidor.

- Docker levantará un contenedor con Cnetos 8 y Solid en el como servicio, la persistencia de la data se mantendrá en : ``./App``.


## ESTRUCTURA DE SOLID_SERVER
## 


