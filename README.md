# Node Course

This repository contains the code examples given in Node course for IDF on April 19th, 2020

## About me

My name is Yariv Katz and I will be the lecturer of this course.
Check out my LinkedIn to learn more.
[Yariv Katz LinkedIn](https://il.linkedin.com/in/yariv-katz "LinkedIn")

## Course Plan

### About the course

- What is Node
- What can we create with Node
- Node is not a framework so we need to learn Express as well
- Why Node?

### Node Introduction

- Installing Node
- Hello World
- Understanding Javascript
- Countdown example
- Javascript Event driven
- Javascript async code
- Node structure
- Javascript JIT compiled
- REPL

### Student EX. 30minutes

- Iterate on all the environment variables and print all of them.
- Make sure you manage to run you app using Visual Studio Code debugger
- Make sure you run your code while adding environment variable of your own.

### Modules

- Splitting to multiple files
- what is a module
- our first module
- core modules
- community modules
- npm
- module wrapping function

### Student EX. 30 minutes

- create two modules
- from one export a variable, a class, and a function
- from the other use everything you exported


- import the core module **https**
- try and use that module to send a get request to: https://nztodo.herokuapp.com/api/task/?format=json
- print the result returned from that request

### Async conventions

- what is async code
- classify your async code
- error first callback
- Promise
- Event Emitter

### Student EX. 30 minutes

- create a file called **fetch.js**
- this file will expose a function which will get a string url as an argument
- The function will return a promise containing string.
- The function will use the **https** module to send a get request to the url: https://nztodo.herokuapp.com/api/task/?format=json
- you need to convert the result of **https.request** to a promise and the promise should contain the request data.

### Exceptions

- Error class
- throwing an exception
- try and catch
- What happens to the process on exception
- forever
- Promise catch
- Event Emitter - error event

### Express introduction

- Server
- Application
- Middleware
- Router
- Views
- Exceptions

### EX - REST Server 1hour

- Create your first REST server
- Create a module holding a singleton class called **UserService**
- **UserService** should manage an array of users where each user has a **firstName** and a **lastName**
- Our users array should be exposed via REST api to CRUD actions.

### Testing with Mocha

- Mocha
- Chai
- describe
- it
- hooks

### EX - Mocha

- Test one of the API of the REST server you created in the previous EX.
- Make sure you can run your tests with Visual Studio Code while placing breakpoints for debugging your test.

### Express Advanced and patterns

- middleware creator
- static middleware
- body
- cookies
- sessions
- CSRF
- Authentication
- Passport
- JWT

