import {Options} from "sequelize";
import config from "@/config/config";

const database: Options = {
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    host: config.database.host,
    dialect: 'postgres',
}

export = database;