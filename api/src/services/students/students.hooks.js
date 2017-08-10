const { authenticate } = require('feathers-authentication').hooks;
const { associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');

const filterStudents = require('../../hooks/filterStudents');
// const createStudent = require('../../hooks/createStudent');

const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];


module.exports = {
  before: {
    all: [],
    find: [filterStudents()],
    get: [],
    create: [],
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
