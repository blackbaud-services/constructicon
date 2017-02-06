module.exports = function(markup) {
  if (typeof document !== 'undefined') return
  var jsdom = require('jsdom').jsdom
  global.document = jsdom(markup || '')
  global.window = document.defaultView

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
}
