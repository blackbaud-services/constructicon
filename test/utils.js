const find = require('lodash/find')

module.exports = {
  findRule: (rules, id) => {
    return find(rules, (rule) => rule.id === id)
  }
}
