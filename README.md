# metodologia-be

# BTS Platform Back-end
This document specifies the process to set up the necessary environment to work with the back-end portion of the **BTS Platform** project.

## Requirements
This API is built on **Node.js** as the main technology used, version ``10.16.3``, and npm version ``6.9.0`` as recommended versions.

If  you don't have it, here is the link to download [Node.js](https://nodejs.org/es/).

## Database
The database management system in use for the current project is **PostgreSQL version 10**, so we recommend to use this version too.

### DB Installation and configuration
You can download PostgreSQL from his official [website](https://www.postgresql.org/download/). Just select the correct installer for your OS and follow the instructions listed there.

[Here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) you can find the graphic installer for Postgres, just be aware that this installer has **no longer support** for PostgreSQL after **version 10.x** for **Linux Systems**.

**IMPORTANT:** When asked what do you want to install, omit the Stack Builder software. You don't need it. 
If you used the graphic installer do not forget your **user** and **password** to access to the DB.

### Executing PostgreSQL commands in the Terminal for Windows users

Running a PostgreSQL command outside of the **SQL Shell** is not possible out of the box in Windows. In order to be able to run them from any command line in Windows, first you need to set up `psql` (all PostgreSQL commands beging with this) as an environment variable in the Operating System.

The paths that need to be added in the `Path` are the `bin` directory and the `lib` directory. Both will be the following (*given you didn't change the default directory during installation*):

```
C:\Program Files\PostgreSQL\<version>\<directory>
```

### `bin` directory
E.g.
```
C:\Program Files\PostgreSQL\10\bin
```

### `lib` directory
E.g.
```
C:\Program Files\PostgreSQL\10\lib
```
---
> **REMEMBER TO RESTART THE TERMINAL IN CASE YOU HAVE IT RUNNING.**

### DB Roles and Schema
For those that install PostgreSQL using the command line, you can create your own user and schema following the next steps.
1. Postgres creates a default user during the installation, so we will be using this user to login.  
    ```
    sudo su - postgres
    ```
    For MacOS users you will need one of the next commands to login into postgres, after that just skip to the third step
    ```
    psql postgres
    sudo psql postgres
    ```
1. Now we need to enter into the psql command line.
    ```
    psql
    ```
1. List the current roles
    ```
    \du
    ```
1. Now we will create a role as super user with the following command
    ```
    CREATE ROLE YourRoleName WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD 'YourPassword';
    ```
1. Now we will create a schema in the postgres database and assign it to the new user with the following commands (you can create a new database if you want)
    ```
    CREATE SCHEMA SchemaName;
    ALTER SCHEMA SchemaName OWNER TO YourRoleName;
    ```
>**Do not forget your user and password**

## Project setup
1. Download the repository. You need to clone the repository in your local, so paste this command in your Command line  
    ````
    git clone git@gitlab.bluetrail.software:bts-platform/bts_internship_2019_be_app.git
    ````
1. Go to the project folder.
1. Create a file named ``.env.default``. 
1. In this file you will set al variables that are necessary for the API, go to the file ``.env.default.example``, copy all the content and paste it into ``.env.default``.
1. Replace the explanations for the correct values
1. Run the  command ``npm install`` in your command line to install all dependencies.
1. We will run the following command to create the configuration file for sequelize in the location config/configSequelize.json (Takes your credentials from .env.default)
    ```
    npm run sequelize-config
    ```
1. Run the following commands to create the database tables (Takes your credentials from .env.default)
    ```
     npx sequelize-cli db:migrate
    ```
 There is also one command to revert back the schema (delete the tables), use it wisely
 ```
 npx sequelize-cli db:migrate:undo:all
 ```

### Seeders
The seeders populate some of the tables, fill the tables that requires the features that are already implemented in the platform.

Tables:
- company_regions
- company_locations
- skill_levels
- skills
- company_fields
- company_roles
- company_seniorities
- company_positions
- permissions_categories
- permissions
- clients
- clients_members
- projects
- client_project_team
- users
- company_roles
- user_roles
- user_skill_levels
- users_ projects
- user_project_hours
- timesheets
- check_ins
- user_experiences
- company_holiday
- holiday_locations


The file in the seeders/configVariables.js location contains a variable called **yearToFill** which is what dictates until what year the timesheet and check-ins records will be filled

```
    // run seeders to populate database
    npx sequelize-cli db:seed:all

    // undo all records
    npx sequelize-cli db:seed:undo:all
```


The project now is ready to be executed and the API ready to use.

## First use
1. Open your console inside the project folder.
1. Start the application using this command: ```npx nodemon index.js```.
1. Make a request. Paste the next url in your browser. (By default, the port is 3000).
    ````
    http://localhost:3000/
    ````
   You will see the swagger documentation for the API, here you can get information about the endpoints that are currently in use.

## Endpoints
The different endpoints that you can interact with, are build in the next form:  
````
http://localhost:<port>/api/<resource>/<endpoint>
````
For example: 
````
http://localhost:3000/api/users/login
```` 

> If you want to change the default port for another, change it too in the `swaggerApiDefinition.json`, otherwise, this wont work
## Testing 
For the testing part, we decide to do unit testing, because this will help us to know if the functionalities are working as we expect, and also, avoid the complexity to overwhelming us, for that reason we are implementing the **mocha** framework, and the assertion library **chai**.  
For more information about test conventions please check the following [document](https://docs.google.com/document/d/1KeOG3cb1dsv12y7wcRDprlqy61pnbl2-alzO1UVGiEo/edit?usp=sharing).

To run an specific test you need to run the following
```
npx mocha test/myTestFolder/myTestFile.js
```

## Backend Documentation
For more information about the Backend side click the link below.
- [Backend documentation](https://drive.google.com/drive/folders/19tO-bXftUUPWJYPif02MkJEKQ0WsJXNu?usp=sharing)

