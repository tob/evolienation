const assert = require('assert');
const app = require('../../src/app');

describe('\'batches\' service', () => {
  it('registered the service', () => {
    const service = app.service('batches');

    assert.ok(service, 'Registered the service');
  });
});
