FROM node:10

RUN mkdir /usr/src/app 
WORKDIR /usr/src/app

RUN npm -v

RUN npm install @angular/core
RUN npm install @angular-devkit/schematics
RUN npm install -g @angular/cli

RUN npm install

RUN git config --global user.email "gabrielcandrade01@gmail.com"
RUN git config --global user.name "Gabriel Andrade"

RUN chmod -R 777 ./

COPY . project