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

