const { authenticate } = require('feathers-authentication').hooks;
const { associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');

const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];


module.exports = {
  before: {
    all: [],
    find: [],
    get: [...restrict,],
    create: [ ...restrict,
      associateCurrentUser({ as: 'teacherId' }),
    ],
    update: [...restrict,],
    patch: [...restrict,],
    remove: [...restrict,]
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
