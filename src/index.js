const express = require("express");

const { ServerConfig, Logger } = require("./config");

const apiRouter = require("./routes");

const app = express();

/**
 * adding body parser middlewares
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// localhost:3000/api/
app.use('/api', apiRouter);


app.listen(ServerConfig.PORT, () => {
    console.log(`Started server at PORT: ${ServerConfig.PORT}`);
});