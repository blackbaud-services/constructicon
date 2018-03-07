export const required = (msg = 'This field is required') => {
  return (val) => {
    switch (typeof val) {
      case 'string':
        return !val.trim() && msg
      default:
        return !val && msg
    }
  }
}

export const email = (msg = 'Please enter a valid email') => {
  return (val) => !!val && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val) && msg
}

export const phone = (msg = 'Please enter a valid phone number') => {
  const phoneRegex = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$/
  return (val) => !!val && !phoneRegex.test(val.replace(/\s/g, '')) && msg
}

export const url = (msg = 'Please enter a valid URL') => {
  const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
  return (val) => !!val && !urlRegex.test(val) && msg
}

export const slug = (msg = 'Please enter a valid URL using only letters, numbers or hyphens (-)') => {
  return (val) => !!val && !/^[A-Za-z0-9-]+$/i.test(val) && msg
}

export const number = (msg = 'Must be a number') => {
  return (val) => (!!val && isNaN(val)) && msg
}

export const alphaNumeric = (msg = 'Field must be only letters or numbers') => {
  return (val) => !!val && !/^[A-Za-z0-9]+$/i.test(val) && msg
}

export const alpha = (msg = 'Field must be only letters') => {
  return (val) => !!val && !/^[A-Za-z]+$/i.test(val) && msg
}

export const alphaNumericSpecial = (msg = 'No special characters allowed') => {
  return (val) => !!val && !/^[A-Za-z0-9'_./#&+-\s]+$/i.test(val) && msg
}

export const equals = (value, msg = `Field must be equal to ${value}`) => {
  return (val) => (!!val && val !== value) && msg
}

export const equalsField = (field, msg = `Field must be equal to ${field}`) => {
  return (val, values) => (!!val && val !== values[field]) && msg
}

export const greaterThan = (min = 0, msg) => {
  return (val) => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val <= min && (msg || `Number must be greater than ${min}`)
      default:
        return !!val && val.length <= min && (msg || `Must have a length greater than ${min}`)
    }
  }
}

export const greaterThanOrEqualTo = (min = 0, msg) => {
  return (val) => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val < min && (msg || `Number must be greater than or equal to ${min}`)
      default:
        return !!val && val.length < min && (msg || `Must have a length greater than or equal to ${min}`)
    }
  }
}

export const lessThan = (max = 0, msg) => {
  return (val) => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val >= max && (msg || `Number must be less than ${max}`)
      default:
        return !!val && val.length >= max && (msg || `Must have a length less than ${max}`)
    }
  }
}

export const lessThanOrEqualTo = (max = 0, msg) => {
  return (val) => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val > max && (msg || `Number must be less than or equal to ${max}`)
      default:
        return !!val && val.length < max && (msg || `Must have a length less than or equal to ${max}`)
    }
  }
}
