const { authenticate } = require('feathers-authentication').hooks;
const createEvaluation = require('../../hooks/createEvaluationPimp');


module.exports = {
  before: {
    // all: [ authenticate('jwt') ],
    all: [],
    find: [],
    get: [],
    create: [createEvaluation()],
    update: [],
    patch: [],
    remove: []
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
