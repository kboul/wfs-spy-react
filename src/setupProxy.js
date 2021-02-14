const createProxyMiddleware = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://stadtplaene.ulm.de/geoserver/geoportalUlm/wfs',
            changeOrigin: true,
            pathRewrite: {
                [`^/api`]: ''
            }
        })
    );
};
