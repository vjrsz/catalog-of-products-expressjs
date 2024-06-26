import { Model, DataTypes } from 'sequelize';
import SequelizeDatabaseProvider from '@infrastructure/databases/providers/sequelize/SequelizeDatabaseProvider';

class UserData extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;

}
UserData.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: SequelizeDatabaseProvider.sequelize,
        modelName: 'UserData',
        tableName: 'users',
        timestamps: true
    }
);

export default UserData;