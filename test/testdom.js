module.exports = function(markup) {
  // if (typeof document !== 'undefined') return
  const { JSDOM } = require('jsdom')
  const { document } = new JSDOM(markup).window
  global.document = document
  global.window = document.defaultView

  global.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 0);
  }

  // Stub `matchMedia` to silence errors
  global.window.matchMedia = global.window.matchMedia || function() {
    return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
    }
  }

  global.navigator = {
    userAgent: 'chrome'
  }

  global.HTMLCollection = window.HTMLCollection
  global.NodeList = window.NodeList
}
