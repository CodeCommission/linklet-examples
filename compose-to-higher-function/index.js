const {compose, cors, query, time, log} = require('linklet');

module.exports = compose(
  time({suffix: true}),
  cors({}),
  log({json: true}),
  query()
)(handler);

async function handler (req, res) {
  return {
    message: 'foo',
    query: req.query,
  };
}