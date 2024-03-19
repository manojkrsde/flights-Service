const express = require("express");

const { ServerConfig, Logger } = require("./config");
const apiRouter = require("./routes");

const app = express();

app.use('/api', apiRouter);

app.listen(ServerConfig.PORT, () => {
    console.log(`Started server at PORT: ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server.",
        Error("Error", "Something went worng!!"));
})