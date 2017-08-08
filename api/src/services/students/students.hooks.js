const { authenticate } = require('feathers-authentication').hooks;
const { associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');

const filterCurrentColor = require('../../hooks/filterStudents');
const createStudent = require('../../hooks/createStudent');

const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];
// return function (hook) {  
//   function filterStudents() {
//     return hook.app.service('students').find({
//       query: { currentColor: 'Blue'}
//     }).then(
//       return hook
//     )
//     });
//   }
// };

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [createStudent()],
    update: [...restrict],
    patch: [...restrict],
    remove: [...restrict]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
