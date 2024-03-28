const express = require("express");
const { ServerConfig, Logger } = require("./config");
const { sequelize } = require('./models');

const apiRouter = require("./routes");
const errorHandler = require('./utils/errorHandler');
const resetIdentity = require("./utils/common/identity.reset");

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

    /**
     * Resetting Identity column
     */
    sequelize.authenticate()
        .then(() => {
            return resetIdentity();
        })
        .then(() => {
            console.log("Succes: Identity seed reset successfull");
        })
        .catch(error => {
            console.log('Identity seed reset -- failed -- for all models');
            console.error('Database is not connected:', error);
            Logger.error({ message: "Database is not Connected!!!", error: error });
        });
});