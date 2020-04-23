FROM amd64/centos:latest

# Create app directory
WORKDIR ./App
EXPOSE 8443 

RUN rm -r /var/cache/dnf
RUN dnf install -y 'dnf-command(config-manager)'
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN dnf config-manager --add-repo https://dl.yarnpkg.com/rpm/yarn.repo -y
RUN dnf update -y
RUN dnf install -y gcc-c++ make yarn nodejs
RUN node -v > ./nodeversion.txt

# INSTALL SOLID SERVER
RUN npm install -g solid-server 
# -> SE INSTALO EN /usr/lib/node_modules/solid-server/bin

# GENERAR CERTIFICADOS (DIRECTORIO DONDE SE EJECUTARÁ SOLID INIT, esto se genera un nivel mas arriba)
#RUN openssl req -outform PEM -keyform PEM -new -x509 -sha256 -newkey rsa:2048 -nodes -keyout . privkey.pem -days 365 -out ./fullchain.pem \
COPY ./Certificates/fullchain.pem .
COPY ./Certificates/privkey.pem .

#IR AL DIRECTORIO DONDE QUEREMOS INSTALAR Y EJECUTAR:
#RUN /usr/lib/node_modules/solid-server/bin/solid-test init 
#Genrará un config.json
#y luego
#**********************
COPY ./config.json .
RUN cd /App
CMD ["/usr/lib/node_modules/solid-server/bin/solid-test", "start"]

