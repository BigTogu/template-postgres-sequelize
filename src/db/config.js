import { Sequelize } from 'sequelize';

const database = 'jira';
const username = 'postgres';
const password = 'postgres';
const host = 'localhost';

const sequelize = new Sequelize(database, username, password, {
	host: host,
	dialect: 'postgres',
});

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((error) => {
		console.error('Unable to connect to the database: ', error);
	});

export default sequelize;
