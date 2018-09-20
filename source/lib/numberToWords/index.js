import chunk from 'lodash/chunk'

const words = {
  ones: [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ],

  tens: [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ],

  teens: [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ]
}

export default (number = 0) => {
  if (typeof number !== 'number' || isNaN(number) || number === 0) {
    return 'zero'
  } else {
    const numberAsArray = number.toString().split('')
    const groupsOfHundreds = groupIntoHundreds(numberAsArray)
    if (groupsOfHundreds.length > 3) {
      return 'number is too large'
    }
    return convert(groupsOfHundreds)
  }
}

const sizes = arrayLength => {
  switch (arrayLength) {
    case 1:
      return ['']
    case 2:
      return ['thousand', '']
    case 3:
      return ['million', 'thousand', '']
  }
}

const groupHasValue = group => group.some(number => number !== '0')

const convert = groupsOfHundreds =>
  groupsOfHundreds
    .map((group, i) => {
      const isLast =
        groupsOfHundreds.length > 1 && groupsOfHundreds.length - 1 === i
      return groupHasValue(group)
        ? `${convertHundreds(group, isLast)} ${
          sizes(groupsOfHundreds.length)[i]
        }`
        : ''
    })
    .join(' ')
    .replace(/\s{2,}/g, ' ')
    .trim()

const convertHundreds = (group, isLast) => {
  const tensInt = parseInt(group[1] + group[2])
  const tensWord = convertTensAndOnes(tensInt)
  const hundredsInt = parseInt(group[0])
  const hundredsWord =
    hundredsInt > 0 ? `${words.ones[hundredsInt]} hundred` : ''
  const and = (hundredsInt || isLast) && tensInt ? 'and' : ''
  return `${hundredsWord} ${and} ${tensWord}`
}

const convertTensAndOnes = tens => {
  if (tens < 10) return words.ones[tens]
  else if (tens >= 10 && tens < 20) {
    return words.teens[tens - 10]
  } else {
    const tensWord = words.tens[Math.floor(tens / 10)]
    const onesWord = words.ones[tens % 10]
    const hyphen = tensWord !== '' && onesWord !== ''
    return `${tensWord}${hyphen ? '-' : ''}${onesWord}`
  }
}

const groupIntoHundreds = numberArray => {
  let one, tens, hundreds
  switch (numberArray.length % 3) {
    case 1:
      ;[one, ...hundreds] = numberArray
      return [['0', '0', one], ...chunk(hundreds, 3)]
    case 2:
      ;[tens, one, ...hundreds] = numberArray
      return [['0', tens, one], ...chunk(hundreds, 3)]
    default:
      return chunk(numberArray, 3)
  }
}
