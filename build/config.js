module.exports = {
  port: '3005',
  proxy: {
    '/api': {
      target: 'http://120.27.13.225:80',
      changeOrigin: true
    }
  },
  vendors: ['classnames', 'react-router', 'react-router-dom'],
  offline: {
    externals: [
      '//cdnjs.cloudflare.com/ajax/libs/spinkit/1.2.5/spinkit.min.css',
      '//cdnjs.cloudflare.com/ajax/libs/antd/3.12.1/antd.min.css',
      '//cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js',
      '//cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js'
    ]
  },
  development: {
    publicPath: '/',
    libs: {
      spinKit: '//cdnjs.cloudflare.com/ajax/libs/spinkit/1.2.5/spinkit.min.css',
      antdCss: '/antd/dist/antd.css',
      react: '/react/umd/react.development.js',
      reactDom: '/react-dom/umd/react-dom.development.js'
    }
  },
  test: {
    publicPath: '/app/',
    libs: {
      spinKit: '//cdnjs.cloudflare.com/ajax/libs/spinkit/1.2.5/spinkit.min.css',
      antdCss: '//cdnjs.cloudflare.com/ajax/libs/antd/3.12.1/antd.min.css',
      react: '//cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js',
      reactDom: '//cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js'
    }
  },
  production: {
    publicPath: '/',
    libs: {
      spinKit: '//cdnjs.cloudflare.com/ajax/libs/spinkit/1.2.5/spinkit.min.css',
      antdCss: '//cdnjs.cloudflare.com/ajax/libs/antd/3.12.1/antd.min.css',
      react: '//cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js',
      reactDom: '//cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js'

    }
  }
};
