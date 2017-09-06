const {json} = require('linklet');

module.exports = async (req, res) => {
  const data = await json(req);
  console.log(data)
  return 'JSON body logged out to console!';
};