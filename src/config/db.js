import mysql from 'mysql';
import { config } from './config.js';

const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.name
});

export default connection;