import * as process from "node:process";

require('dotenv').config();

interface Config {
    env: string;
    port: string | number;
    rootDirname: string;
    srcDirname: string;
    logger: {
        dir: string;
    };
    database: {
        host:string;
        port:string;
        database:string;
        username:string;
        password:string;
    };
}

const rootDirname = "./"
const srcDirname = __dirname.replace("\\config", "")
const env = process.env.NODE_ENV || "development";

const config: Config = {
    env: env.replace(" ", ""),
    port: process.env.PORT || 3000,
    rootDirname: rootDirname,
    srcDirname: srcDirname,
    logger: {
        dir: `${rootDirname}/.logs`
    },
    database: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || "5432",
        database: process.env.DB_DATABASE || "postgres",
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "postgres",
    }
};

export default config;
