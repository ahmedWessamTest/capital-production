
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/*"
  },
  {
    "renderMode": 0,
    "route": "/*/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B42WONR7.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Z22CWXHW.js"
    ],
    "route": "/*/set-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RVXFZM5Q.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-S6QTKQQC.js"
    ],
    "route": "/*/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YETX4VEV.js"
    ],
    "route": "/*/claims-info"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NUMU46H4.js"
    ],
    "route": "/*/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DAQM3BGI.js",
      "chunk-U65OUURT.js"
    ],
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-L4QR4F43.js",
      "chunk-U65OUURT.js"
    ],
    "route": "/*/profile/edit-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3IOVMXAA.js",
      "chunk-4G6KTDCB.js",
      "chunk-IHHARELF.js",
      "chunk-2PGWYXRB.js"
    ],
    "route": "/*/medical-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5JSWC2T4.js",
      "chunk-IHHARELF.js",
      "chunk-2PGWYXRB.js"
    ],
    "route": "/*/motor-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-U5FZ3FZ3.js"
    ],
    "route": "/*/claims"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TJYFYAU5.js"
    ],
    "route": "/*/claims/*/*/comments"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QUPNJ6TD.js",
      "chunk-4G6KTDCB.js",
      "chunk-IHHARELF.js",
      "chunk-2PGWYXRB.js"
    ],
    "route": "/*/building-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IXT3FL47.js",
      "chunk-4G6KTDCB.js",
      "chunk-IHHARELF.js",
      "chunk-2PGWYXRB.js"
    ],
    "route": "/*/job-insurance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6JRX3HBW.js"
    ],
    "route": "/*/contact"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4UFR3HDG.js",
      "chunk-2PGWYXRB.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SVXVF6IB.js"
    ],
    "route": "/*/about"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LLU27WAI.js"
    ],
    "route": "/*/policies"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KRWBUAIZ.js"
    ],
    "route": "/*/policies/*/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DKTTCUUF.js",
      "chunk-7CBVHDBB.js"
    ],
    "route": "/*/policies/*/*/corporate-details"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WD63FWSS.js",
      "chunk-7CBVHDBB.js"
    ],
    "route": "/*/policies/*/*/corporate-details/add"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FGBP2UZK.js"
    ],
    "route": "/*/policies/*/*/comments"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KQYGEHX4.js",
      "chunk-2PGWYXRB.js"
    ],
    "route": "/*/blog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KPOBFFB7.js",
      "chunk-3GQ6CBOA.js"
    ],
    "route": "/*/english-blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LAFPP3O2.js"
    ],
    "route": "/*/notifications"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MPFKEGLC.js",
      "chunk-3GQ6CBOA.js"
    ],
    "route": "/*/arabic-blogs"
  },
  {
    "renderMode": 0,
    "redirectTo": "/*/login",
    "route": "/*/logout"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15603, hash: '567766b95798953eee9979384ca6f9f6756515fa28d1e8752a88e01cb86fc220', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4120, hash: 'c4958ac04e7731a65605917fae3a3c783ffa9027371a1ccd4367a8bdbe12240e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YLPSXYKK.css': {size: 116317, hash: 'qTz1naFXwbA', text: () => import('./assets-chunks/styles-YLPSXYKK_css.mjs').then(m => m.default)}
  },
};
