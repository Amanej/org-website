const locales = require('./locales.js');

module.exports = {
  title: "JAMstack Oslo",
  description:
    "Notes on the organization and planning of JAMstack Oslo chapter",
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: true
    },
    "@vuepress/back-to-top": {}
  },
  themeConfig: {
    locales: locales
  },
};
