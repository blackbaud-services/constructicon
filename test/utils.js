const find = require('lodash/find')

module.exports = {
  findRule: (rules, id) => {
    return find(rules, (rule) => rule.id === id)
  },

  getMountedElement: (el, selector) => {
    const wrapper = mount(el)
    return wrapper.find(selector)
  }
}
