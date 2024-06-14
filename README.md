# api-biblioteca 
CRUD REST - full API with NestJs.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>


## Description

<p align="center">Pós-Tech challenge at FIAP of TypeScript, Building a API (CRUD), for a library, to be consumed on the Front-end. 
In this project we used:<br><br>
<b>Nest</b> 10.0,<br>
<b>TypeScript</b> 5.1.3, <br>
<b>TypeORM</b> 0.3.20.  </p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
# Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Diego Gervasio](https://linktr.ee/diegogervasio)
- Website - [https://nestjs.com](https://nestjs.com/)

## License

  Nest is [MIT licensed](LICENSE).

## Example

<b>@GET</b>

 ![alt text](preview/Screenshot_1.jpg)

<b>@POST</b>

- PayLoad:

```bash
{
"titulo" : "A menina que roubava livros",
"autor" : "Markus Zusak",
"isbn" : "123321",
"ano" : "2015"
}
```

![alt text](Screenshot_2.jpg)

![alt text](Screenshot_3.jpg)

<b>@PUT</b>
- PayLoad:

```bash
{
"titulo" : "A menina que roubava livros PUT",
"autor" : "Markus Zusak",
"isbn" : "123321",
"ano" : "2014"
}
```
![alt text](Screenshot_4.jpg)

![alt text](Screenshot_5.jpg)

<b>@DELETE</b>

![alt text](Screenshot_6.jpg)