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
App will run on locallhost:3000 
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
Create a developer.
#### Parameters:
* key: nombres_completos - type: String  - required: true  
* key: link_github - type: String - required: true  
* key: tecnologias_conocidas - type: [String] - required: true  
```
baseUrl/developer
```
### - Put
Update a developer.
#### Parameters:
* key: id required: true
* key: nombres_completos - type: String  - required: false  
* key: link_github - type: String - required: false 
* key: tecnologias_conocidas - type: [String] - required: false 
```
baseUrl/developer/:id
```
### - Delete
Delete a developer.
#### Parameters:
* key: id required: true
```
baseUrl/developer/:id
```
## Dockerized App
The app can be dockerized follow the instructions bellow.

Built images:
```
$ sudo docker-compose build
```
Run docker-container:
```
$ sudo docker-compose up
```
This process create two containers.
If you run ***docker ps*** you can see some how this:
```
CONTAINER ID        IMAGE                         COMMAND                  CREATED             STATUS              PORTS                      NAMES
c1a4ab23f324        avalith-api-rest_app_server   "docker-entrypoint.s…"   21 seconds ago      Up 20 seconds       0.0.0.0:3000->3000/tcp     app_server
f073e874b23d        mongo                         "docker-entrypoint.s…"   22 seconds ago      Up 21 seconds       0.0.0.0:27017->27017/tcp   mongo
```
Finally, you can use the end-point locally with this container.

***App is dockerized for run in diferents environments.***

## Built With
* [NodeJS] - Used to create the backend.
* [MongoDB] - Used to save data locally. 
* [MongoDB Atlas] - Used to save data remotely. 
* [Heroku] - Used to deploy app.
* [Docker] - Used to dockerized app.

## Author
***Dario Herrera***

   [NodeJS]: <https://nodejs.org/es/>
   [MongoDB]: <https://www.mongodb.com/es>
   [API Rest]: <https://avalith-api-rest.herokuapp.com/developer>
   [MongoDB Atlas]: <https://www.mongodb.com/cloud/atlas>
   [Heroku]: <https://www.heroku.com/>
   [Docker]: <https://www.docker.com/>
