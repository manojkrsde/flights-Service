# ✈️ Flights Service

✈️ Comprehensive Flight Management

- This service expertly handles flight information, including schedules, routes, and availability, to ensure accurate and up-to-date data for users.

⚙️ Smooth API Integration

- The Flights Service seamlessly integrates with other services via API, allowing efficient data sharing and streamlined user interactions.

🧭 Dynamic Query Capabilities

- It offers flexible querying options for flights based on various parameters such as date, time, origin, and destination.

## 🔍 Exploring the `Folder Structure`

The `src` folder houses all the actual source code of the project, excluding any tests. It's organized into various subfolders to keep the codebase clean and maintainable. Let's take a look inside the `src` folder:

- ⚙️ **`config`**: This folder contains configurations and setups for libraries or modules. For example:

  - **`server-config.js`**: Sets up `dotenv` for using environment variables in a cleaner fashion.

  - **`logger-config.js`**: Configuring a logging library for meaningful logs is also managed here.

  - **`config.json`**: Sets up `database` configuration, contains development, testing and production environment configuration such as
    - "username"
    - "password"
    - "database"
    - "host"
    - "dialect"

- 💼 **`controllers`**: Acts as the intermediary between incoming requests and the business layer:

  - Receives incoming requests and data, then passes them to the business layer.
  - Structures API responses based on the business layer's output before sending them to the client.

- ⚠️ **`errors`**: Contains custom error classes used across the project to handle exceptions.

- 🔍 **`middlewares`**: Intercepts incoming requests and allows for the implementation of:

  - Validators,
  - authenticators,
  - and other request interception logic.

- 🛠️ **`migrations`**: Houses database migration files to manage schema changes over time:

  - Creating new tables, altering existing tables, and adding indexes.

- 🧩 **`models`**: Contains JavaScript representations of database schemas.

- 🗃️ **`repositories`**: Provides logic for interacting with the database:

  - Houses all `raw` queries or `ORM` queries.

- 🌐 **`routes`**: Defines API routes for the application:

  - Registers routes with corresponding middlewares and controllers.

- 📝 **`seeders`**: Populates the database with default values for roles, such as customer, flight_company, and admin.

- 🔧 **`services`**: Manages core application functionality and business logic, communicating with the repository layer for database interaction.

- 🔧 **`utils`**: Contains utility functions, helper methods, enums, and error handlers:
  - These functions provide common support to the rest of the application.

## 🥇 Project Setup

1. ⬇️ **Download**: Grab this project template from GitHub and open it in your favorite text editor.

2. 📥 **Install Dependencies**: Navigate to the project folder and execute the following command to install all necessary dependencies:

   ```
   npm install
   ```

3. 🔌**Environment Configuration**: In the root directory, create a `.env` file and add the following environment variables:

   ```
   PORT=
   ```

   Here's an example configuration:

   ```
   PORT=3000
   ```

4. 🚀 **Initialize Sequelize**: Navigate to the `src` folder and execute the following command to initialize Sequelize:

   ```
   npx sequelize init
   ```

   This will create a `config.json` file inside the `config` folder.

5. 🔌 **Configure Database**: Open `config.json` and update the database configuration:

   - Add your database username, password, and dialect (e.g., `mysql`, `mariadb`, `mssql`, etc.).

6. 💾 **Database Setup**: Populate the database by running the following commands:

   ```
   npx sequelize db:create
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

7. ⚡**Start the Server**: Begin running the server using this command:

   ```
   npm start
   ```

## ⚙️ Technologies Used

- **`Node.js`**: A versatile, server-side JavaScript runtime for building scalable and efficient applications.

- **`Express.js`**: A minimalist web framework for Node.js, providing robust routing and middleware capabilities.

- **`Git`**: A version control system for managing code changes and collaboration among team members.

- **`MSSQL`**: A relational database management system that offers robust data storage and querying capabilities.

- **`Sequelize ORM`**: An object-relational mapping tool for Node.js that simplifies database interactions and model management.

- **`Postman`**: A popular API development tool for testing, documenting, and collaborating on APIs.

## 📦 Packages and Their Usage

- **`express parser`** 📝: A middleware for Express that parses incoming request bodies in various formats such as JSON and URL-encoded data, making the data easily accessible for further processing.

- **`dotenv`** 🔧: Loads environment variables from a `.env` file into `process.env`, allowing you to securely store sensitive information such as API keys and database credentials.

- **`express`** 🚀: A web application framework for Node.js that provides a minimalist structure for building APIs and web applications. It offers routing, middleware, and other essential features for building scalable server-side applications.

- **`http-status-codes`** 📜: A package providing easy access to standard HTTP status codes, which makes it convenient to set response statuses and handle different types of API responses.

- **`pluralize`** 🔀: A utility library for transforming singular words into plural and vice versa. This is used mainly to converting models name in plural form, which is a use case in identity reset function.

- **`sequelize`** 💽: An object-relational mapping (ORM) library for Node.js, allowing you to interact with your database using models and associations. It simplifies database operations and offers a high-level abstraction.

- **`sequelize-cli`** 🛠️: A command-line interface for Sequelize that provides commands for managing migrations, models, and other database-related tasks. It facilitates database schema changes and updates.

- **`tedious`** 💾: A Node.js driver for interacting with Microsoft SQL Server databases. It allows you to execute queries, manage transactions, and handle database connections.

- **`winston`** 🛡️: A logging library for Node.js that supports various log levels and transports (such as file or console logging). It helps you track and manage application logs effectively for debugging and monitoring purposes.

## Project Details

### 💾 Database Structure

The project uses a relational database to store data for various entities:

---

- **Flights** ✈️: Stores flights information such as flightNumber, arrival time, remaining seats, etc.

  ```
    +--------------------------+
    |          Flights         |
    +--------------------------+
    |  id       (PK, Identity) |
    |  flightNumber            |
    |  airplaneId         (FK) |
    |  departureAirportId (FK) |
    |  arrivalAirportId   (FK) |
    |  arrivalTime             |
    |  departureTime           |
    |  price                   |
    |  boardingGate            |
    |  createdAt               |
    |  updatedAt               |
    |  totalSeats              |
    +--------------------------+

    airplaneId         : References Airplanes on column [ID]
    departureAirportId : References Airports on column [ID]
    arrivalAirportId   : References Airports on column [ID]
  ```

---

- **Airplanes** 🛬: Stores airplanes information such as name, modelNumber, capacity, etc.

  ```
    +-------------------------+
    |         Airplanes       |
    +-------------------------+
    |  id      (PK, Identity) |
    |  name                   |
    |  modelNumber            |
    |  capacity               |
    |  createdAt              |
    |  updatedAt              |
    +-------------------------+
  ```

---

- **Seats** 💺: Stores airplane seats information such as row, col, etc.

  ```
    +-------------------------+
    |          Seats          |
    +-------------------------+
    |  id      (PK, Identity) |
    |  airplaneId        (FK) |
    |  row                    |
    |  col                    |
    |  type     (Check Const) |
    |  createdAt              |
    |  updatedAt              |
    +-------------------------+

    airplaneId : References Airplanes on column [ID]
    [type] values IN: ['economy,premium-economy,business,first-class]
  ```

---

- **Airports** 🏢: Stores airports information such as name, airport code, address, etc.

  ```
    +--------------------------+
    |         Airports         |
    +--------------------------+
    |  id       (PK, Identity) |
    |  name                    |
    |  code                    |
    |  address                 |
    |  cityId             (FK) |
    |  createdAt               |
    |  updatedAt               |
    +--------------------------+

    [cityId] : References Cities on column [ID]
  ```

---

- **Cities** 🏙️: Stores city information such as name, etc.

  ```
    +--------------------------+
    |          Cities          |
    +--------------------------+
    |  id       (PK, Identity) |
    |  name                    |
    |  createdAt               |
    |  updatedAt               |
    +--------------------------+

  ```

---

### 🌐 API Calls

The API endpoints use different `HTTP` methods(`GET`, `POST`, `PUT`, `DELETE`) and follow `RESTful` design principles.

---

The project provides a variety of API endpoints for different functionalities:

**Flights Service BASE ADDRESS** : `http:localhost:3000/`

---

- **Flights**: Endpoints for flights, some endpoint may require admin role.

  | HTTP Method | Endpoint                    | Description              | Middleware              | Controller      |
  | ----------- | --------------------------- | ------------------------ | ----------------------- | --------------- |
  | `GET`       | `/api/v1/flights/ping`      | Ping check               |                         | `pingCheck`     |
  | `POST`      | `/api/v1/flights/`          | Create a new flight      | `validateCreateRequest` | `createFlight`  |
  | `GET`       | `/api/v1/flights/`          | Get all flights          |                         | `getAllFlights` |
  | `GET`       | `/api/v1/flights/:id`       | Get flight by ID         | `getFlight`             | `getFlight`     |
  | `PATCH`     | `/api/v1/flights/:id/seats` | Update seats of a flight | `validateUpdateRequest` | `updateSeats`   |

---

- **Airplanes**: Endpoints for airplanes, require admin role.

  | HTTP Method | Endpoint                 | Description           | Middleware              | Controller Method |
  | ----------- | ------------------------ | --------------------- | ----------------------- | ----------------- |
  | `GET`       | `/api/v1/airplanes/ping` | Ping check            |                         | `pingCheck`       |
  | `POST`      | `/api/v1/airplanes/`     | Create a new airplane | `validateCreateRequest` | `createAirplane`  |
  | `GET`       | `/api/v1/airplanes/`     | Get all airplanes     |                         | `getAirplanes`    |
  | `GET`       | `/api/v1/airplanes/:id`  | Get airplane by ID    |                         | `getAirplane`     |
  | `DELETE`    | `/api/v1/airplanes/:id`  | Delete airplane by ID |                         | `destroyAirplane` |
  | `PATCH`     | `/api/v1/airplanes/:id`  | Update airplane by ID |                         | `updateAirplane`  |

---

- **Airports**: Endpoints for airports, require admin role.

  | HTTP Method | Endpoint                | Description          | Middleware              | Controller Method |
  | ----------- | ----------------------- | -------------------- | ----------------------- | ----------------- |
  | `GET`       | `/api/v1/airports/ping` | Ping check           |                         | `pingCheck`       |
  | `POST`      | `/api/v1/airports/`     | Create a new airport | `validateCreateRequest` | `createAirport`   |
  | `GET`       | `/api/v1/airports/`     | Get all airports     |                         | `getAirports`     |
  | `GET`       | `/api/v1/airports/:id`  | Get airport by ID    |                         | `getAirport`      |
  | `DELETE`    | `/api/v1/airports/:id`  | Delete airport by ID |                         | `destroyAirport`  |
  | `PATCH`     | `/api/v1/airports/:id`  | Update airport by ID |                         | `updateAirport`   |

---

- **Cities**: Endpoints for cities, require admin role.

  | HTTP Method | Endpoint              | Description       | Middleware              | Controller Method |
  | ----------- | --------------------- | ----------------- | ----------------------- | ----------------- |
  | `GET`       | `/api/v1/cities/ping` | Ping check        |                         | `pingCheck`       |
  | `POST`      | `/api/v1/cities/`     | Create a new city | `validateCreateRequest` | `createCity`      |
  | `GET`       | `/api/v1/cities/`     | Get all cities    |                         | `getCities`       |
  | `GET`       | `/api/v1/cities/:id`  | Get city by ID    |                         | `getCity`         |
  | `DELETE`    | `/api/v1/cities/:id`  | Delete city by ID |                         | `destroyCity`     |
  | `PATCH`     | `/api/v1/cities/:id`  | Update city by ID |                         | `updateCity`      |

---

### ⚠️ Error Handling

Error handling is a crucial aspect of the project, ensuring smooth operation and useful feedback for clients:

- **Custom Error Classes**: The project uses custom error classes like `BaseError`, `BadRequestError`, `InternalServerError`, and `AppError` to manage different types of errors and return appropriate HTTP status codes.

- **Middleware**: The `errorHandler` middleware function intercepts and handles exceptions by identifying the type of error and responding accordingly. It is executed just before express default error handler runs

- **Structured Responses**: Errors are structured as JSON objects with properties such as status code, message, and error explanation. This consistent response format simplifies troubleshooting for clients.

- **Default Handling**: If an unknown error occurs, the middleware throws a custom `InternalServerError` and log the error in `Logger`.

- **Logging**: All errors are logged for monitoring and troubleshooting purposes, enabling quick identification and resolution of problems.

The combination of these features ensures reliable and user-friendly error handling throughout the application.
