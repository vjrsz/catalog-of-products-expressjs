import {SequelizeDatabaseProvider} from "@infrastructure/databases/providers/sequelize/SequelizeDatabaseProvider";

class DatabaseProviderMock {
    mock(){
        return new SequelizeDatabaseProvider();
    }
}

export default new DatabaseProviderMock();