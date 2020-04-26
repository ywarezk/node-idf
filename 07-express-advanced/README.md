## Express Advanced

common problem backend programers will face
and how we solve those problems using express.

### The solution

the problems will be different 
but the solution almost always will be the same

### Middleware Creators

```
middleware => function(req, res, next) { ... }
```

middleware creator is a function that returns a middleware.

```
app.use(
    someMiddlewareCreator(configurations)
)
```

### Cookies

we are calling http protocol a stateless protocol.
each request is standing on it's own
each request does not depend on previous requests

even though http is stateless we still need it to be state full
if we have requestN we need to know what request(N-1)

one of these tools is cookies.

Cookies is a header that is send with the Request
The server will get the cookie header

who can set the cookie header:
- client 
- server

server can send a response with header: Set-Cookie
client can set the cookie

The cookie is automatically send with each request


### Session

session is another tool to turn stateless to state full
another tool to know in requestN what previous request did request(N-1);

in cookies the data is saved in the client
with session the data is saved in the backend

the data is saved in the backend
session does use cookies a little bit.

imagine the server is maintining key value store

session id | session data
---------- | -------------

1            {firstName: 'yariv'}
2          | {firstName: 'Piglet'}
3          | {firstName: 'Sweetness'}


the server will send the browser: Set-Cookie: sessionId: 1 

- Why not use cookies? why use session?

hiding this information does make our app more secure
we are saving traffic

- What we are going to use the session for
the most common use case
is authentication
session authentication - we now the user logged in and we save in our session details about the logged in user

#### CSRF

Cross Site Request Forgery

evil.com is taking advantage of the automatic cookie sending
evil.com will send a request to bank.com knowing the browser will send the session id

#### Store the session data

the session data can be stored in different solutions

- memory => for development only
- database
- memory database - redis, memcached
- file

### Authentication

Authentication
Authorization

- Who am I?
- Am I allowed to?

What ways do you know that I can authenticate the user?
- login
- adfs
- location based
- facebook login
- google login
- bitbucket
- github
- oauth2
- JWT
- openid

### Dividing the authentication methods

- session based authentication
- non session.