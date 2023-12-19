# ExpressRestAPI

## Base URL:

## Backend APIs Architecture

![Image Backend API Architecture](https://storage.googleapis.com/model-resnet/Backend-API-Architecture.png)

## Tech

Nurtur uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [MySQL] - MySQL is the world's most popular open source database
- [App Engine] - Serverless platform that allows users to develop and run applications on Google's infrastructure.

## Installation.

1. Install NPM dependencies

```sh
npm install
```

2. Run nodemon

```sh
nodemon start
```

3. Set Environment Variables

```sh
APP_URL = http://localhost
PORT = 4000

DB_CONNECTION = your_type_DB
DB_HOST = your_host_DB
DB_PORT = your_port_DB
DB_USERNAME= your_username
DB_PASSWORD=your_password
DB_NAME = your_name_DB
```

4. Run App

```sh
npm run
```

## Exemple Test on Local
![A](https://storage.googleapis.com/model-resnet/Test%20Postman/Screenshot%202023-12-20%20024304.png)

![B](https://storage.googleapis.com/model-resnet/Test%20Postman/Screenshot%202023-12-20%20024427.png)

![C](https://storage.googleapis.com/model-resnet/Test%20Postman/Screenshot%202023-12-20%20024756.png)

![D](https://storage.googleapis.com/model-resnet/Test%20Postman/Screenshot%202023-12-20%20024827.png)

[node.js]: http://nodejs.org
[express]: http://expressjs.com
[MySQL]: https://www.mysql.com/
[App Engine]: https://cloud.google.com/appengine?hl=en
