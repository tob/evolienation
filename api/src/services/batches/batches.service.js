// Initializes the `batches` service on path `/batches`
const createService = require('feathers-mongoose');
const createModel = require('../../models/batches.model');
const hooks = require('./batches.hooks');
const filters = require('./batches.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'batches',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/batches', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('batches');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
