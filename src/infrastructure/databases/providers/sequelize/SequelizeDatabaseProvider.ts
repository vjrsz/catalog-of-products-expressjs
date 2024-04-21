import {DatabaseProvider} from "@infrastructure/databases/interfaces/DatabaseProvider";
import {Sequelize} from "sequelize";
import config from "@/config/config";

export class SequelizeDatabaseProvider implements DatabaseProvider {
    private readonly _sequelize: Sequelize;

    constructor() {
        this._sequelize = new Sequelize(config.database.database, config.database.username, config.database.password,
            {
                host: config.database.host,
                dialect: "postgres"
            });
    }

    async connect() {
        try {
            await this._sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }


    get sequelize(): Sequelize {
        return this._sequelize;
    }
}

export default new SequelizeDatabaseProvider();