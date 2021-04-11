const proxy = require("http-proxy-middleware");
import { baseUrl } from "./baseURL/baseURL";

module.exports = function (app) {
  app.use(proxy("/api/user/*", { target: `${baseUrl}` }));
  app.use(proxy("/api/user/property/*", { target: `${baseUrl}` }));
  app.use(proxy("/api/profile/*", { target: `${baseUrl}` }));
  app.use(proxy("/api/user/propertyCount", { target: `${baseUrl}` }));
  app.use(proxy("/api/profile/*", { target: `${baseUrl}` }));
  app.use(proxy("/api/profile/user/current", { target: `${baseUrl}` }));

  app.use(proxy("/api/profile/user/*", { target: `${baseUrl}` }));
  app.use(proxy("/api/profile/user/property/*", { target: `${baseUrl}` }));
  app.use(
    proxy("/api/profile/user/property/count", {
      target: `${baseUrl}`,
    })
  );
  app.use(proxy("/api/property/all", { target: `${baseUrl}` }));
  app.use(proxy("/api/property/", { target: `${baseUrl}` }));
  app.use(proxy("/api/property/add", { target: `${baseUrl}` }));
  app.use(proxy("/api/property/update/", { target: `${baseUrl}` }));
  app.use(proxy("/api/property/delete/*", { target: `${baseUrl}` }));
};
