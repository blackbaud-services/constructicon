import defaults from 'lodash/defaults'
import map from 'lodash/map'

const services = {
  facebook: ({ url, caption = '' }) => {
    return `http://www.facebook.com/sharer.php?u=${url}&caption=${caption}`
  },
  twitter: ({ url, title, hashtags = '' }) => {
    return `https://twitter.com/share?url=${url}&text=${title}&hashtags=${hashtags}`
  },
  google: ({ url }) => {
    return `https://plus.google.com/share?url=${url}`
  }
}

const toString = (obj) => {
  return map(obj, function (value, key) {
    return key + '=' + value
  }).join(',')
}

const openPopup = (url, config) => {
  config = defaults(config || {}, { width: 640, height: 320 })

  let windowTop = window.screenTop ? window.screenTop : window.screenY
  let windowLeft = window.screenLeft ? window.screenLeft : window.screenX

  config.top = windowTop + (window.innerHeight / 2) - (config.height / 2)
  config.left = windowLeft + (window.innerWidth / 2) - (config.width / 2)
  config = toString(config)

  window.open(url, 'shareWindow', config)
}

export default (options) => () => {
  const {
    type,
    url = window.location.href,
    title = document.title,
    hashtags,
    caption
  } = options

  const service = services[type]

  if (service) {
    const popupConfig = {
      toolbar: 0,
      status: 0,
      width: 640,
      height: 320
    }

    const shareUrl = service({
      url,
      title,
      hashtags,
      caption
    })

    openPopup(shareUrl, popupConfig)
  }
}
