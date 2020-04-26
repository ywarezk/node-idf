## Express Introduction

### What is Express.js

- Express is a framework for building server
- Our server will get http requests and return response
- open source
- we need to install it with npm
- express is very fast
- minimalistic 
- we are going to build a server


       Requests: localhost:8000/ ----> Express Server 8000 -----> Response

### Our server

our server will going to listen to a port
request should be directed to some port

### How express categorize our request

Express is intrested in two headers of the request:

- Method: GET, POST, PUT, DELETE, ...
- Path: /foo, /bar

### Create our first Server

We create our Server by using an object called **Application**

### Application

- application can open a server
- application is configured to deal with certain requests
- application is modular
- you will have in an express server, one application that calls listen, many children application that extends the request that you support

### Express Project - Express Server Architecture

- is made from many express Application
- only one application is going to do app.listen()

### Players

- Server listens to a single port 3000
- Our server is made from many applications
- one application that we will call the main application -> parentApp.listen(3000)
- parentApp.use('/dashboard', idfDashboard);
- parentApp.use('/admin', idfAdmin);

### Middleware

middleware is function
this function will  jump on certain request
middle is a function like callback that is called when a certain requests enter

Middleware can do **one** of the following:
- return response
- do some logic and than pass to the next middleware
- return error

request ---> mid1 ---> mid2 ---> mid3 --> ...
                         |
                    Response

### EX

- class **UserService**
- Singleton

```
users = [
       {id: 1, firstName: 'Yariv', lastName: 'Katz'},
       {id: 1, firstName: 'Pigletshvili', lastName: 'Chaitovsky'},
       {id: 1, firstName: 'Sweetness', lastName: 'no last name'}
]
```
- request of GET /api/users
- res.json()

### Video

This lecture is also available in video in the following url:

https://youtu.be/I0REjv7kapY

### Router

What is a Router
Router is another modular object that contain middleware

### Views

How to we return a response of html

### Yariv help me get things in order

express-generator will create a new express project

#### NPX

node package executer
the job of npx is to execute stuff you install from npm

node_modules/.bin/hello

cd foo

../node_modules/.bin/hello

npx will look in the closest node_modules

npx hello

npx execute local package or community package


### EX - your first REST express server

- using **express-generator** you will create a new express project.
```
> npx express-generator users-rest
```
- use the previous **UserService**
- add the following methods to that service
  - createUser(user) => push the user to the array {firstName: 'hello', lastName: 'world'}
  - deleteUser(id) => delete a user from the users array
  - updateUser(user) => {id:1, firstName: 'sdfasd'}
- your express server should support the following urls:
  - /api/users => for GET request return all the users, you should return status 200
  - /api/users => for POST request generate a new user, the post request should contain in the body the new user details to create, you should return the user and also status 201
  - /api/users/:id - for get request return the user with that id and also a status of 200
  - /api/users/:id - for delete request, delete a user from the array, status code 204
  - /api/users/:id - put will edit the user with :id, in the body the client will send the fields he want to update, you return the user you updated and status 202

### Q&A

- What is app.use?

app.use is another way to add a middleware to your express app.

very similar to:
app.get
app.post
app.all
app.put
app.delete

the difference from the other methods is this:
- app.use will operate on all request methods
app.all also operates on all request methods.
- the path param is optional
app.use([path], callback)

```
[path] = '/'
app.use(function(req, res) {

});

// /hello
// /hello/foo
// /hello/*
app.use('/hello', function(req, res) {

})
```

```
app.use(logger())

logger() => function(req, res,next) {}

app.use(function(req, res, next) {})
```

app.use is used to apply a middleware through prefix path (alot of the time is this '/')
to all the requests that enter
app.use(logger())

