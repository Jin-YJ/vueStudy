/* eslint-disable */

export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key, params = {}) =>
      // en.hi => ['en', 'ko']

      //   key.split('.').reduce((o, i) => {
      //     console.log(o)
      //     console.log(i)
      //     if (o) return o[i]
      //   }, options)
      key
        .split('.')
        .reduce((o, i) => {
          if (o) return o[i]
        }, options)
        .replace(/{\w+}/g, (match) => params[match.slice(1, -1)])
  }
}
