# A small book library system
This is a RESTFUL API for a small book library system.



## Tech Stack

**Server:** Node, Express, MongoDB Atlas, Typescript

## Video Presentation 

**Video Link** -  https://drive.google.com/file/d/1ZVS1jWIrhAySxS4QfIOZuFlbW9r8Txx4/view?usp=sharing

## Deployed link 
 https://libraysystem.onrender.com/


## Features 
-  Signup/Login
-  Role-Based Authorization and authentication 
-  Filter based on old books and new books
-  Book creation, This is only for the user that has the role of creator

  #### Run Locally
```javascript
  step 1- clone the Repo https://github.com/bire210/vtkassignment.git
  step 2- Install all dependencies npm install
  step 3- npm start
```

### Runs the project in the development mode

[http://localhost:8080](http://localhost:8080)

## NPM Packages
<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>

</p>

## API Endpoints

  #### User Registration
```javascript
POST http://localhost:8080/auth/register
```
  #### User Login
```javascript
POST  http://localhost:8080/auth/login
```
  #### TO Crate a book . A book creation is done by only the user that has a role of CREATOR
```javascript
POST http://localhost:8080/books
```
  #### To get All books
```javascript
GET http://localhost:8080/books
```
  #### To get All  the books that were create before 10  minutes
```javascript
GET  http://localhost:8080/books?old=1
```


  #### To get All  the books that were create within 10  minutes
```javascript
GET  http://localhost:8080/books?new=1
```


| `Authors` |
| :-------: | 

 
 [@bire210](https://github.com/bire210) 

