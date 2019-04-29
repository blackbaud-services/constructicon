import defaults from 'lodash/defaults'
import map from 'lodash/map'
import { stringify } from 'query-string'

const services = {
  facebook: ({ url }) => {
    return `http://www.facebook.com/sharer.php?${stringify({ u: url })}`
  },
  mail: ({ url, title }) => {
    return `mailto:?${stringify({ body: url, subject: title })}`
  },
  linkedin: ({ url, title }) => {
    return `https://www.linkedin.com/shareArticle?${stringify({
      mini: true,
      url,
      title
    })}`
  },
  messenger: ({ url }) => {
    return `fb-messenger://share?${stringify({ link: url })}`
  },
  pinterest: ({ url, title, image }) => {
    return `http://pinterest.com/pin/create/button/?${stringify({
      url,
      media: image,
      description: title
    })}`
  },
  reddit: ({ url, title }) => {
    return `http://www.reddit.com/submit?${stringify({ url, title })}`
  },
  sms: ({ url }) => {
    return `sms:?&${stringify({ body: url })}`
  },
  twitter: ({ url, title, hashtags }) => {
    return `https://twitter.com/share?${stringify({
      url,
      hashtags,
      text: title
    })}`
  },
  whatsapp: ({ url, title }) => {
    return `whatsapp://send?${stringify({ text: [title, url].join(' - ') })}`
  }
}

const popupShares = ['facebook', 'twitter', 'linkedin', 'pinterest', 'reddit']

const toString = obj => {
  return map(obj, function (value, key) {
    return key + '=' + value
  }).join(',')
}

const openPopup = (url, config) => {
  config = defaults(config || {}, { width: 640, height: 320 })

  let windowTop = window.screenTop ? window.screenTop : window.screenY
  let windowLeft = window.screenLeft ? window.screenLeft : window.screenX

  config.top = windowTop + window.innerHeight / 2 - config.height / 2
  config.left = windowLeft + window.innerWidth / 2 - config.width / 2
  config = toString(config)

  window.open(url, 'shareWindow', config)
}

export default options => () => {
  const imageUrl =
    document.head.querySelector('meta[property="og:image"]') &&
    document.head.querySelector('meta[property="og:image"]').content

  const {
    caption,
    hashtags,
    image = imageUrl,
    title = document.title,
    type,
    url = window.location.href
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
      caption,
      image
    })

    console.log(shareUrl)

    return popupShares.indexOf(type) > -1
      ? openPopup(shareUrl, popupConfig)
      : window.location.assign(shareUrl)
  }
}
