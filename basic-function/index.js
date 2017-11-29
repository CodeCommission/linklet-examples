const { compose, withCORS } = require("linklet");

module.exports = compose(withCORS())(async () => {
  return {
    msg: "Hello World from Linklet!"
  };
});
