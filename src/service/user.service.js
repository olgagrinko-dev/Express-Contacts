const {getAllDataUserDb, getDataUserByIdDb} = require('../repository/user.repository');

async function getAllDataUser() {
    const data = await getAllDataUserDb();
    if(!data.length) throw new Error('База данных не заполнена');
    return data;
}

async function getDataUserById(id) {
    const data = await getDataUserByIdDb(id);
    if(!data.length) throw new Error('База данных не заполнена');
    return data;
}

module.exports = {getAllDataUser, getDataUserById};