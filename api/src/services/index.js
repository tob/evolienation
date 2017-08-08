const students = require('./students/students.service.js');
const users = require('./users/users.service.js');
const evaluations = require('./evaluations/evaluations.service.js');
const batches = require('./batches/batches.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(students);
  app.configure(users);
  app.configure(evaluations);
  app.configure(batches);
};
