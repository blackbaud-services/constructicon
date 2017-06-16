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
  const meta = [
    { 'name': 'description', 'content': description },
    { 'name': 'keywords', 'content': keywords },
    { 'name': 'author', 'content': author },
    { 'property': 'og:type', 'content': ogType },
    { 'property': 'og:title', 'content': ogTitle },
    { 'property': 'og:description', 'content': ogDescription },
    { 'property': 'og:image', 'content': ogImage },
    { 'property': 'og:url', 'content': ogUrl || url }
  ]

  const links = [
    { 'rel': 'canonical', 'href': url },
    { 'rel': 'shortcut icon', 'href': favicon },
    { 'rel': 'apple-touch-icon', 'href': appleTouchIcon }
  ]

  return (
    <Helmet
      title={title}
      meta={reject(meta, (prop) => !prop.content)}
      link={reject(links, (prop) => !prop.href)}
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
  ogImage: PropTypes.string,
  ogUrl: PropTypes.string,
  url: PropTypes.string,
  favicon: PropTypes.string,
  appleTouchIcon: PropTypes.string
}

export default Meta
