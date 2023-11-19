import { Sequelize } from 'sequelize';
import dotevn from 'dotenv';


dotevn.config({ path: '../.env' });

const password = process.env.PASSWORD;
const username = process.env.USER;
const database = process.env.DATABASE;


const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql',
});
const autenticar = async () => {
try {
        await sequelize.authenticate();
        console.log('Conectado exitosamente');
    } catch (error) {
        console.log('Error al autenticar', error);
    }

}
autenticar();
export { sequelize};