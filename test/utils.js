const find = require('lodash/find')
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() });

module.exports = {
  findRule: (rules, id) => {
    return find(rules, (rule) => rule.id === id)
  },

  getMountedElement: (el, selector) => {
    const wrapper = mount(el)
    return wrapper.find(selector)
  }
}
