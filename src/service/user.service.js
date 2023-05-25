const {
  getAllDataUserDb,
  getDataUserByIdDb,
  createDataUserDb,
  upDataUserByIdDb,
  deleteUserByIdDb,
  patchDataDb,
} = require('../repository/user.repository');

async function getAllDataUser() {
  const data = await getAllDataUserDb();
  if (!data.length) throw new Error('База данных не заполнена');
  return data;
}

async function getDataUserById(id) {
  const data = await getDataUserByIdDb(id);
  if (!data.length) throw new Error('Такого id нет');
  return data;
}

async function createDataUser(name, surname, birth, city, age) {
  const data = await createDataUserDb(name, surname, birth, city, age);
  if (!data.length) throw new Error('База данных не заполнена');
  return data;
}

async function upDataUserById(id, name, surname, birth, city, age) {
  const data = await upDataUserByIdDb(id, name, surname, birth, city, age);
  if (!data.length) throw new Error('Такого id нет');
  return data;
}

async function deleteUserById(id) {
  const data = await deleteUserByIdDb(id);
  if (!data.length) throw new Error('Такого id нет');
  return data;
}

async function patchData(id, clientData) {
  const data = await patchDataDb(id, clientData);
  return data;
}

module.exports = { getAllDataUser, getDataUserById, createDataUser, upDataUserById, deleteUserById, patchData };
