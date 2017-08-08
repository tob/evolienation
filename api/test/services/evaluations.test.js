const assert = require('assert');
const app = require('../../src/app');

describe('\'evaluations\' service', () => {
  it('registered the service', () => {
    const service = app.service('evaluations');

    assert.ok(service, 'Registered the service');
  });
});
