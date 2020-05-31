# Avalith API Rest
The API allows POST, GET, UPDATE and DELETE Developers.
## Getting Started
You can use the API locally and remotely. To run follow the instructions below.

## Prerequisites
To run the API locally you must have NodeJS and MongoDB installed.
* [NodeJS]
* [MongoDB]

## Installing
To use API locally get dependencies
```
$ npm install
```
## Running Locally
Raise the mongo database engine
```
$ sudo mongod
```
Open the program in the terminal or a code editor and execute the command.
```
$ node src/index.js
```
App will run on localhost:3000 
## Running Remotely
The application is deployed at the following link.
* [API Rest]

## Using
You can use ***Postman*** to test the services.

### - Get 
List of all developers.
```
baseUrl/developer
```
### - Post
Create a developer
#### Parameters:
* key: nombres_completos - type: String  - required: true  
* key: link_github - type: String - required: true  
* key: tecnologias_conocidas - type: [String] - required: true  
```
baseUrl/developer
```
### - Put
Update a developer
#### Parameters:
* key: id required: true
* key: nombres_completos - type: String  - required: false  
* key: link_github - type: String - required: false 
* key: tecnologias_conocidas - type: [String] - required: false 
```
baseUrl/developer/:id
```
### - Delete
Update a developer
#### Parameters:
* key: id required: true
```
baseUrl/developer/:id
```
## Dockerized 
***The app is dockerized for run in difernts environments.***

## Built With
* [NodeJS] - Used to create the backend.
* [MongoDB] - Used to save data locally. 
* [MongoDB Atlas] - Used to save data remotely. 
* [Heroku] - Used to deploy app.
* [Docker] - Used to dockeried app.

## Author
***Dario Herrera***

   [NodeJS]: <https://nodejs.org/es/>
   [MongoDB]: <https://www.mongodb.com/es>
   [API Rest]: <https://avalith-api-rest.herokuapp.com/developer>
   [MongoDB Atlas]: <https://www.mongodb.com/cloud/atlas>
   [Heroku]: <https://www.heroku.com/>
   [Docker]: <https://www.docker.com/>
