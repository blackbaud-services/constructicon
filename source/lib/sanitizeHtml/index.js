import xss from 'xss'

const defaultConfig = {
  whiteList: {
    a: ['href'],
    abbr: ['title'],
    b: [],
    br: [],
    del: [],
    div: [],
    em: [],
    hr: [],
    i: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    strike: [],
    strong: [],
    sub: [],
    sup: [],
    u: [],
    iframe: ['src'],
    img: ['alt', 'src']
  }
}

export const sanitizeHtml = (html, options = defaultConfig) => {
  console.log(html)
  return xss(html, options)
}

export default sanitizeHtml
