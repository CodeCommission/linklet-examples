const { compose, withJsonBody, withParams } = require("linklet");
const { withJWTAuth } = require("linklet-higher-handlers");

module.exports = compose(
  withJWTAuth({ secret: "SuperSecret" }),
  withParams({
    path: "/:id?"
  }),
  withJsonBody()
)(req =>
  Object.assign({}, { id: req.params.id }, req.body, {
    msg: "Hello from Linklet!"
  })
);
