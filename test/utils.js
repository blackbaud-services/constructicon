const find = require('lodash/find')

const extractRule = (rules, id) => {
  if (!rules.includes(id)) return ''
  const fromSelector = rules.split(id)[1]
  const fromBrace = fromSelector.split('{')[1]
  const toBrace = fromBrace.split('}')[0]
  return toBrace.replace(/: /g, ':')
}

module.exports = {
  findRule: (rules, ids) => {
    return ids.split(' ').reduce((acc, id) => ({
      css: acc.css + extractRule(rules, id)
    }), {css: ''})
  },

  getMountedElement: (el, selector) => {
    const wrapper = mount(el)
    return wrapper.find(selector)
  }
}
