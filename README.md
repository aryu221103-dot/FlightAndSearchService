  # Welcome to Flights Service

  ## Project Setup 
  - clone the project on your local
  - Execute "npm install" on the same path as of the root directory of your downloaded project
  - Create a `.env` file in the root directory and add the following environmental variable
    - `PORT = 3000`
  -   Inside the `src/config` folder create a new `config.json` file and add the following piece of json 

  ```{
  "development": {
    "username": <YOUR DB LOGIN NAME>,
    "password": <YOUR DB PASSWORD>,
    "database": "Flights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },}

  ```
  - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`