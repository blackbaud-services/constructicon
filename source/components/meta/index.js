import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import reject from 'lodash/reject'

const Meta = ({
  title,
  description,
  keywords,
  author,
  ogType,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  url,
  favicon,
  appleTouchIcon
}) => {
  const getURL = value => {
    switch (typeof value) {
      case 'object':
        return value.url
      case 'string':
        return value
      default:
        return undefined
    }
  }

  const meta = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'author', content: author },
    { property: 'og:type', content: ogType },
    { property: 'og:title', content: ogTitle },
    { property: 'og:description', content: ogDescription },
    { property: 'og:image', content: getURL(ogImage) },
    { property: 'og:url', content: getURL(ogUrl) || getURL(url) }
  ]

  const links = [
    { rel: 'canonical', href: getURL(url) },
    { rel: 'shortcut icon', href: getURL(favicon) },
    { rel: 'apple-touch-icon', href: getURL(appleTouchIcon) }
  ]

  return (
    <Helmet
      title={title}
      meta={reject(meta, prop => !prop.content)}
      link={reject(links, prop => !prop.href)}
    />
  )
}

Meta.propTypes = {
  foreground: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  ogType: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ogUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  favicon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  appleTouchIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default Meta
