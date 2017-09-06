const parse = require('urlencoded-body-parser');

module.exports = async (req, res) => {
  const data = await parse(req);
  console.log(data);
  return 'URL encoded body logged to console!';
};