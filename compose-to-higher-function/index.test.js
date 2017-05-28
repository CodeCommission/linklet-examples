const assert = require('assert');
const fetch = require('node-fetch');
const linklet = require('linklet');

describe('Integration tests', () => {
  it('should fetch a message with query parameters', async () => {
    const service = require('./index');
    const server = linklet(service);
    const instance = await linklet.listen(server, {silent: true});

    const actual = await fetch(`${instance.url}?foo=bar`).then(res => res.json());

    assert.deepEqual(actual, {message: 'foo', query: {foo: 'bar'}});
  });
});