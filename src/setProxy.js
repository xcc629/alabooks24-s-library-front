const { proxy } = require("http-proxy-middleware");
const { default: BASE_URL } = require("./config");

module.exports = function (app) {
  app.use(
    proxy("/", {
      target: BASE_URL,
    })
  );
};
