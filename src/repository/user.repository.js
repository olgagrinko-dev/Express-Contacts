const { pool } = require('../db');

async function getAllDataUserDb() {
    const client = await pool.connect();
    const sql = 'SELECT users.name, users.surname, users_info.birth FROM users_info JOIN users ON users.info_id = users_info.id ';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getDataUserByIdDb(id) {
    const client = await pool.connect();
    const sql = 'SELECT users.id, users.name, users.surname, users_info.birth FROM users_info JOIN users ON users.info_id = users_info.id where users.id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

module.exports = {getAllDataUserDb, getDataUserByIdDb};