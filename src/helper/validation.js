function isValidationUserId(request, response, next) {
  const { id } = request.params;
  if (isNaN(id)) throw new Error('id не число');
  if (id <= 0) throw new Error('id отрицательное число');
  next();
}

function isValidUserBody(request, response, next) {
  const { name, surname, birth, city, age } = request.body;
  if (!name) throw new Error('name отсутствует');
  if (!surname) throw new Error('surname отсутствует');
  if (!birth) throw new Error('birth отсутствует');
  if (!city) throw new Error('city отсутствует');
  if (age <= 0) throw new Error('age отрицательное число');
  next();
}

module.exports = { isValidationUserId, isValidUserBody };
