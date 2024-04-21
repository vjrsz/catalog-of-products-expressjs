import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
    async up (queryInterface: QueryInterface, Sequelize: any) {
        return queryInterface.bulkInsert('users', [
            {
                username: 'John',
                email: 'example@example.com',
                password: '12345678',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down (queryInterface: QueryInterface, Sequelize: any) {
        return queryInterface.bulkDelete('users', [], {});
    }
};
