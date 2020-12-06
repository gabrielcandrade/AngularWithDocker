# RPG Center em Angular

## Colaboradores

- [Claudio Bessa Montenegro](https://github.com/claudiobmontenegro)

- [Gabriel de Carvalho Andrade](https://github.com/gabrielcandrade)

## Tecnologias

- Angular CLI - 10.1
- PrimeNG - 10.0
- Node - 10 

## Pré-requisitos

Para executar este projeto basta possuir o Docker instalado em sua máquina, caso não tenha e possua SO Linux, abaixo compartilharei os comandos para instalação:

- sudo apt-get update && sudo apt-get upgrade
- sudo apt-get install docker
- sudo apt-get install docker-cli

## Instalação

Para instalação do projeto, basta rodar o comando:

- docker-compose build
- docker-compose up -d

Em casos de BUGS, deve acessar o container, e rodar os scripts:

- docker-compose -it "NomeDoContainer" bash
- cd app/
- ng build
- "Salvar qualquer arquivo .ts"

## Rotas

- [Home](http://localhost:4200/home)
- [Lista de Mundos](http://localhost:4200/world-list)
- [Cadastrar novo mundo](http://localhost:4200/world-new)
- [Lista de Personagens](http://localhost:4200/character-list)
- [Cadastrar novo personagem](http://localhost:4200/character-new)
- [Lista de Poderes](http://localhost:4200/skills-list)
- [Cadastrar novo poder](http://localhost:4200/skills-new)

## Rotas API

- [Character](http://localhost:8005/api/character/)
- [Skill](http://localhost:8005/api/skill/)
- [World](http://localhost:8005/api/world/)