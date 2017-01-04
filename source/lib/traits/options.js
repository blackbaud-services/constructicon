import * as traits from './index'

const options = Object.keys(traits).reduce((acc, key) => ({
  ...acc,
  [key]: Object.keys(traits[key])
}), {})

export default options
