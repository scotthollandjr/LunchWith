# LunchWith__

A web application for professionals looking to network in a new industry or area.


### Prerequisites

You will need the following things properly installed on your computer.

* [Node.js](https://nodejs.org/en/download/)
* [Postgres](https://www.postgresql.org/)


## Local Installation

Follow the instructions below if you prefer to install the application on your local machine:

1. Install the latest version of [Node.js](https://nodejs.org). This application requires Node.js 4+.

1. Install [Postgres](http://www.postgresql.org/) locally

1. Start Postgres and create a database called **belgianbeers**.

1. Clone this repository or download and unzip [this](https://github.com/ccoenraets/belgian-beer-explorer/archive/master.zip) zip file.

1. Navigate to the **belgian-beer-explorer** directory and install the project dependencies:

    ```
    npm install
    ```

1. Open **server/config.js** and make sure the **databaseURL** matches your configuration (use your user name)

1. Type the following command to build the client application:

    ```
    npm run webpack
    ```

    The project is written using ECMAScript 6 including ECMAScript 6 modules.

1. Type the following command to start the server:

    ```
    npm start
    ```

    The database is automatically populated

1. Open a browser and access [http://localhost:3000](http://localhost:3000)


### License

MIT License. Copyright (c) 2016 **_Kyle Wolfson & Scott Holland, Jr._**
