import sanitize from 'sanitize-html'

export const config = {
  allowedTags: [
    'a',
    'abbr',
    'b',
    'br',
    'del',
    'div',
    'em',
    'hr',
    'i',
    'iframe',
    'img',
    'p',
    'pre',
    's',
    'small',
    'span',
    'strike',
    'strong',
    'sub',
    'sup',
    'u'
  ],
  allowedAttributes: {
    a: ['href'],
    abbr: ['title'],
    iframe: ['src'],
    img: ['alt', 'src']
  }
}

export const sanitizeHtml = (html, options = config) => sanitize(html, options)

export default sanitizeHtml
