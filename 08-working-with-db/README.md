
## Working with DB

### Classify db to families

- Relational

we store the data in a table like structures
SQL based
table structure is well defined

- NOSQL

collection based
documents - json based
structure is more dynamic
for the most of them the query language is javascript based

- Memory based
Redis, memcached

- Graph database
Neo4J


We will focus on Relational, NoSQL


The bottle neck of your backend server will be database queries

### Define you entities

define your tables
and the tables relations

### Relations

- 1:1     {firstName: 'Yariv', userSettings: {email: 'yariv@nerdeez'} }

- 1:M     { firstname: 'Yariv', messages: [ {title: '', createdAt: } ]}

- M:M     { title: 'hello', tags: [ {stam: 'foo'} ] }
          {stam: 'foo', messages: [{title: 'hello'}]}    

in relational database
the table are very much based on the entities diagram 

joins are expensive
let's reduce the joins by reducing the amount of tables we have

- In NOSQL you need to aske after the diagram the following question:
What kind of queries will I have

video entity - 1

comments entity - M

video structure
{ url: '.... ', comments: [{},{}, ... {}]  }

comments:
{...}
{...}
{...}

### ORM

the database you choose
the database released a driver which you can use to connect to a db and perform queries
ORM will use the driver for you to connect to the db and perform queries
supplies a really easy abstraction over the database

ORM you will create OOP classes you interact with the database using classes.

To use ORM we will do the following:
1. npm install some orm package
2. using the orm we will connect to the db
3. we will define class for each entity
4. using the class we will interact with the table / collection
5. will return promise

TypeORM, Sequelize, mongoose  

orm has some advantages
- we can use js as our query language and use OOP
- Database agnostic

ORM has some disadvantages:
- some advances queries will be slow

To install mongo on your computer
https://docs.mongodb.com/guides/server/install/

or you can use atlas to open a free development mongo db

for the relational database we will use sqlite

### Sqlite manager

https://sqlitebrowser.org/

### EX with database and authentication

- create a new project with **express-generator**
- you will connect to an sqlite db using sequelize
- you will create a sequelize model User
  - name: string
  - email: string
  - password: string bcrypt encrypted
- post request to: /api/users/login you need to get in the body the email and password, if login succeeds return jwt token - you will need to use bcrypt.compare
- post request to: /api/users/register - you need to get in the body: name, email, password
  - you will beed to take the bcrypt library
- get /api/yay - only authenticated users can see this text, others will get 401
