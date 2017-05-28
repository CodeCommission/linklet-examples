const assert = require('assert');
const EventSource = require('eventsource');
const linklet = require('linklet');

describe('Integration tests', () => {
  it('should push an event', async () => {
    const service = require('./index');
    const server = linklet(service);
    const instance = await linklet.listen(server, {silent: true});

    const es = new EventSource(instance.url);
    return new Promise(resolve => {
      es.onmessage = msg => {
        const actual = JSON.parse(msg.data);
        assert.deepEqual(actual, {message: 1});
        resolve();
      };
    });
  });
});