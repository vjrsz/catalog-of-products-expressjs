import "reflect-metadata";
import "./infrastructure/utils/alias";
import logger from "@infrastructure/utils/logger";
import express from "express";
import config from "@/config/config";
import routes from "@/routes/routes";
import UserData from "@infrastructure/databases/providers/sequelize/models/userData";

const port = config.port
const app = express()

routes.mount(app)

app.listen(port, () => {
    logger.info(`App loaded in port ${port} [${config.env}]`);
})

UserData.findAll().then(res => console.log(res))

