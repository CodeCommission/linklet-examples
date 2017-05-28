const assert = require('assert');
const fetch = require('node-fetch');
const linklet = require('linklet');

describe.skip('Unit tests', () => {
  it('should yield something ...', async () => {
    const service = require('./index');

    const actual = await service();

    assert.deepEqual(actual, {});
  });
});
