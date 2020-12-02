const React = require('react')
const { name, version } = require('../../../package.json')

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Logo = () => React.createElement(
  'a',
  {
    className: 'rsg-logo',
    href: 'https://github.com/blackbaud-services/constructicon',
    target: '_blank'
  },
  React.createElement('span', { className: 'rsg-logo-name' }, capitalize(name)),
  React.createElement('em', { className: 'rsg-logo-version' }, version)
)

module.exports = Logo
