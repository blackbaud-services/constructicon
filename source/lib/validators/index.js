export const required = (msg = 'This field is required') => {
  return (val) => !val && msg
}

export const email = (msg = 'A valid email is required') => {
  return (val) => !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val) && msg
}

export const greaterThan = (min = 0, msg) => {
  return (val) => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val <= min && `Number must be greater than ${min}`
      default:
        return val.length <= min && `Must have a length greater than ${min}`
    }
  }
}

export const greaterThanOrEqualTo = (min = 0, msg) => {
  return (val) => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val < min && `Number must be greater than or equal to ${min}`
      default:
        return val.length < min && `Must have a length greater than or equal to ${min}`
    }
  }
}

export const lessThan = (max = 0, msg) => {
  return (val) => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val <= max && `Number must be less than ${max}`
      default:
        return val.length <= max && `Must have a length less than ${max}`
    }
  }
}

export const lessThanOrEqualTo = (max = 0, msg) => {
  return (val) => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val < max && `Number must be less than or equal to ${max}`
      default:
        return val.length < max && `Must have a length less than or equal to ${max}`
    }
  }
}
