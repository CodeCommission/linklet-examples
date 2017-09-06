const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const response = await fetch('https://api.npms.io/v2/search?q=linklet');
  const json = await response.json();

  return json.results;
};