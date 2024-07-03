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
- Website - [senescenciaTech](https://senescencia.tech/)
- API - [Biblioteca for test](https://api-biblioteca-nu.vercel.app/livros/)

## License

  Nest is [MIT licensed](LICENSE).

## Example<br>
#### Books<br>
[Api](https://api-biblioteca-nu.vercel.app/livros/) <br><br>
<b>@GET</b> https://api-biblioteca-nu.vercel.app/livros/
![alt text](preview/Screenshot_1.jpg)

or

<b>@GET</b> https://api-biblioteca-nu.vercel.app/livros/id

for books specific. 
 ![alt text](preview/Screenshot_8.jpg)

<b>@POST</b>

- PayLoad new publishing:

```bash
{
"titulo" : "A menina que roubava livros",
"autor" : "Markus Zusak",
"isbn" : "123321",
"ano" : "2015"
"editora" : {
    "editora" : "Nova editora"
            }
}
```
![alt text](preview/Screenshot_7.jpg)

- PayLoad publisher ID that exists:

```bash
{
"titulo" : "A menina que roubava livros",
"autor" : "Markus Zusak",
"isbn" : "123321",
"ano" : "2015"
"editora" : {
    "id" : "c04ced5f-7ac7-4beb-9297-40d9e1fd4a45"
            }
}
```
![alt text](preview/Screenshot_2.jpg)

<b>@PUT</b>- https://api-biblioteca-nu.vercel.app/livros/id

- PayLoad:
to update publisher pass existing ID.

```bash
{
"titulo" : "A menina que roubava livros 2 put",
"autor" : "Markus Zusak",
"isbn" : "123321",
"ano" : "2015",
"editora" : {
    "id" : "32a29790-5c39-4b7b-864a-fe0cd5196bdf"
}
}
```
![alt text](preview/Screenshot_9.jpg)

<b>@DELETE</b> - https://api-biblioteca-nu.vercel.app/livros/id

![alt text](preview/Screenshot_3.jpg)

#### Publish<br>

[Api](https://api-biblioteca-nu.vercel.app/editora/) <br><br>
<b>@GET</b> https://api-biblioteca-nu.vercel.app/editora/

![alt text](preview/Screenshot_10.jpg)

or

<b>@GET</b> https://api-biblioteca-nu.vercel.app/editora/id

for publish specific. 
 ![alt text](preview/Screenshot_11.jpg)<br><br>
<b>@POST</b>

- PayLoad new publishing:

```bash
{

    "editora" : "Nova editora"
        
}
```
![alt text](preview/Screenshot_12.jpg)<br> <br>

<b>@PUT</b>- https://api-biblioteca-nu.vercel.app/editora/id

- PayLoad:
```bash
{
"editora" : "Nova editora PUT"
}
```
![alt text](preview/Screenshot_13.jpg)

<b>@DELETE</b> - https://api-biblioteca-nu.vercel.app/editora/id 
<br> <br>
<b>Warning:</b> To exclude a publisher, it cannot be linked to a book.

![alt text](preview/Screenshot_14.jpg)