export const regularExpressions = {
  alpha: /^[A-Za-z]+$/i,
  alphaNumeric: /^[A-Za-z0-9]+$/i,
  alphaNumericSpecial: /^[A-Za-z0-9'_./#&+-\s]+$/i,
  numeric: /^[0-9.]+$/i,
  passwordComplexity: /^(?:(?=.*\W)(?=.*[a-zA-Z])(?=.*\d))/,
  phone: /^[\d\-+.*#()]/,
  slug: /^[A-Za-z0-9-]+$/i,
  name: /^[A-Za-z0-9-.']+$/i,
  url: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
}

const containsSubstring = (valueA, valueB) => {
  return (
    String(valueA)
      .toLowerCase()
      .indexOf(valueB.toLowerCase()) > -1
  )
}

export const required = (msg = 'This field is required') => {
  return val => {
    switch (typeof val) {
      case 'string':
        return !val.trim() && msg
      default:
        return !val && msg
    }
  }
}

export const email = (msg = 'Please enter a valid email') => {
  return val =>
    !!val &&
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    ) &&
    msg
}

export const phone = (msg = 'Please enter a valid phone number') => {
  return val =>
    !!val && !regularExpressions.phone.test(val.replace(/\s/g, '')) && msg
}

export const url = (msg = 'Please enter a valid URL') => {
  return val => !!val && !regularExpressions.url.test(val) && msg
}

export const slug = (
  msg = 'Please enter a valid URL using only letters, numbers or hyphens (-)'
) => {
  return val => !!val && !regularExpressions.slug.test(val) && msg
}

export const number = (msg = 'Must be a number') => {
  return val => !!val && isNaN(val) && msg
}

export const alphaNumeric = (msg = 'Field must be only letters or numbers') => {
  return val => !!val && !regularExpressions.alphaNumeric.test(val) && msg
}

export const alpha = (msg = 'Field must be only letters') => {
  return val => !!val && !regularExpressions.alpha.test(val) && msg
}

export const alphaNumericSpecial = (msg = 'No special characters allowed') => {
  return val =>
    !!val && !regularExpressions.alphaNumericSpecial.test(val) && msg
}

export const name = (
  msg = "Only a-z, hyphen (-), apostrophe ('), dot (.) and single space characters are allowed"
) => {
  return val => !!val && !regularExpressions.name.test(val) && msg
}

export const regex = (msg = "Custom regex expr needs msg provided!") => {
  return val => !!val && !regularExpressions.name.test(val) && msg
}

export const passwordComplexity = (
  msg = 'Password must include at least one number, a lower or upper case letter and a special character (#,$,%,&,@ etc.)'
) => {
  return val => !!val && !regularExpressions.passwordComplexity.test(val) && msg
}

export const equals = (value, msg = `Field must be equal to ${value}`) => {
  return val => !!val && val !== value && msg
}

export const equalsField = (field, msg = `Field must be equal to ${field}`) => {
  return (val, values) => !!val && val !== values[field] && msg
}

export const doesNotEqualField = (
  field,
  msg = `Field must be different to ${field}`
) => {
  return (val, values) => !!val && val === values[field] && msg
}

export const containsField = (field, msg = `Field must include ${field}`) => {
  return (val, values) =>
    !!val && !!values[field] && !containsSubstring(val, values[field]) && msg
}

export const doesNotContainField = (
  field,
  msg = `Field must not include ${field}`
) => {
  return (val, values) =>
    !!val && !!values[field] && containsSubstring(val, values[field]) && msg
}

export const greaterThan = (min = 0, msg) => {
  return val => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val <= min && (msg || `Number must be greater than ${min}`)
      default:
        return (
          !!val &&
          val.length <= min &&
          (msg || `Must have a length greater than ${min}`)
        )
    }
  }
}

export const greaterThanOrEqualTo = (min = 0, msg) => {
  return val => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return (
          val < min && (msg || `Number must be greater than or equal to ${min}`)
        )
      default:
        return (
          !!val &&
          val.length < min &&
          (msg || `Must have a length greater than or equal to ${min}`)
        )
    }
  }
}

export const lessThan = (max = 0, msg) => {
  return val => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return val >= max && (msg || `Number must be less than ${max}`)
      default:
        return (
          !!val &&
          val.length >= max &&
          (msg || `Must have a length less than ${max}`)
        )
    }
  }
}

export const lessThanOrEqualTo = (max = 0, msg) => {
  return val => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return (
          val > max && (msg || `Number must be less than or equal to ${max}`)
        )
      default:
        return (
          !!val &&
          val.length < max &&
          (msg || `Must have a length less than or equal to ${max}`)
        )
    }
  }
}

export const regexValidator = regex => {
  return val => {
    switch (typeof val) {
      case 'undefined':
        return val
      case 'number':
        return (
          val > max && (msg || `Number must be less than or equal to ${max}`)
        )
      default:
        return (
          !!val &&
          val.length < max &&
          (msg || `Must have a length less than or equal to ${max}`)
        )
    }
  }
}
