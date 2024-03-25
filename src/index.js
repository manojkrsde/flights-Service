const express = require("express");

const { ServerConfig, Logger } = require("./config");

const apiRouter = require("./routes");
const errorHandler = require('./utils/errorHandler');

const app = express();

/**
 * adding body parser middlewares
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// localhost:3000/api/
app.use('/api', apiRouter);

//last middleware for handling errors
app.use(errorHandler);


app.listen(ServerConfig.PORT, () => {
    console.log(`Started server at PORT: ${ServerConfig.PORT}`);
});