module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, args) => {
    // browser will look something like this
    // {
    //   name: 'chrome',
    //   displayName: 'Chrome',
    //   version: '63.0.3239.108',
    //   path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    //   majorVersion: '63'
    // }

    if (browser.name === 'chrome') {
      // `args` is an array of all the arguments
      // that will be passed to Chrome when it launchers
      args.push('--remote-debugging-port=9222'),
      // whatever you return here becomes the new args
      args.push('--start-fullscreen')
      // whatever you return here becomes the new args
      return args
    }

    if (browser.name === 'electron') {
      // `args` is a `BrowserWindow` options object
      // https://electronjs.org/docs/api/browser-window#new-browserwindowoptions
      args['fullscreen'] = true
      // whatever you return here becomes the new args
      return args
    }

  })
}