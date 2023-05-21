const { pool } = require('../db');

async function getAllDataUserDb() {
  const client = await pool.connect();
  const sql = 'SELECT users.id, users.name, users.surname, users_info.birth FROM users_info JOIN users ON users.info_id = users_info.id ';
  const result = (await client.query(sql)).rows;
  return result;
}

async function getDataUserByIdDb() {
  const client = await pool.connect();
  const sql =
    'SELECT users.id, users.name, users.surname, users_info.birth FROM users_info JOIN users ON users.info_id = users_info.id where users.id = $1';
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function createDataUserDb(name, surname, birth, city, age) {
  const client = await pool.connect();
  const sql = 'INSERT INTO users_info (birth, city, age) values ($1, $2, $3) returning *';
  const result = (await client.query(sql, [birth, city, age])).rows;
  const sql_2 = 'INSERT INTO users (name, surname, info_id) values ($1, $2, $3) returning *';
  const result_2 = (await client.query(sql_2, [name, surname, result[0].id])).rows;
  return [{ ...result[0], ...result_2[0] }];
}

async function upDataUserByIdDb(id, name, surname, birth, city, age) {
  const client = await pool.connect();
  const sql = 'UPDATE users_info set birth = $1, city = $2, age = $3  where id = $4 returning *';
  const result = (await client.query(sql, [birth, city, age, id])).rows;
  const sql_2 = 'UPDATE users set name = $1, surname = $2 where info_id = $3 returning *';
  const result_2 = (await client.query(sql_2, [name, surname, result[0].id])).rows;
  return [{ ...result[0], ...result_2[0] }];
}

async function deleteUserByIdDb(id) {
  const client = await pool.connect();
  const sql = 'delete from users_info where id = $1 returning *';
  const result = (await client.query(sql, [id])).rows;
  const sql_2 = 'delete from users where info_id = $1 returning *';
  const result_2 = (await client.query(sql_2, [id])).rows;
  return [{ ...result[0], ...result_2[0] }];
}

module.exports = { getAllDataUserDb, getDataUserByIdDb, createDataUserDb, upDataUserByIdDb, deleteUserByIdDb };
