const { compose, withRedirect, withQuery } = require("linklet");
const { withRoute } = require("linklet-higher-handlers");
const fetch = require("node-fetch");

module.exports = compose(
  withQuery(),
  withRedirect(),
  withRoute({
    path: "/github/callback",
    GET: async (req, res, next) => {
      const accessTokenResponse = await fetch(
        `https://github.com/login/oauth/access_token?code=${req.query
          .code}&client_id=${process.env.GH_CLIENT_ID}&client_secret=${process
          .env.GH_CLIENT_SECRET}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json"
          }
        }
      );
      const authInfoResponse = await accessTokenResponse.json();
      req.gh_access_token = authInfoResponse.access_token;
      const userResponse = await fetch(
        `https://api.github.com/user?access_token=${authInfoResponse.access_token}`
      );
      req.user = await userResponse.json();

      return next(req, res);
    }
  })
)(async (req, res) => {
  if (!req.user)
    return res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env
        .GH_CLIENT_ID}&scope=user&allow_signup=true`
    );

  return {
    msg: "Hello World!",
    url: req.url,
    query: req.query,
    body: req.body,
    ghToken: req.gh_access_token,
    user: req.user
  };
});
