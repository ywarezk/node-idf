## Modules

### Our objective

- Split our backend app to multiple files

### What is module

Javascript file is a module
module can choose what to make public
module a expose something
module b can use what module a exposed

### import export

module.exports
require('./relative-path')

### Module types

- our module
- core modules
- community modules - we are doing with package manager

### NPM

npm stands for node package manager
- install community or organization packages
- you can publish your packages
- version management

With npm you are installing a package

- from where does npm install the package?
you will need to the set the npm to install from your private npm address

```
> npm set registry <some-url>
```

- you check the project if you have **package.json** and if you don't have it you run

```
> npm init
```

- To install a package you use

```
npm install lodash --save
```

install and place in node_modules
