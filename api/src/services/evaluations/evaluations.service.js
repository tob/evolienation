// Initializes the `evaluations` service on path `/evaluations`
const createService = require('feathers-mongoose');
const createModel = require('../../models/evaluations.model');
const hooks = require('./evaluations.hooks');
const filters = require('./evaluations.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'evaluations',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/evaluations', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('evaluations');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
