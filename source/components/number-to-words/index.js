import React from 'react'
import PropTypes from 'prop-types'
import numberToWords from '../../lib/numberToWords'

const NumberToWords = ({ number, tag: Tag, ...props }) => (
  <Tag {...props}>{numberToWords(number)}</Tag>
)

NumberToWords.defaultProps = {
  number: 0,
  tag: 'span'
}

NumberToWords.propTypes = {
  /**
   * the number to be converted
   */
  number: PropTypes.number.isRequired,

  /**
   * The tag or component to be used e.g. span, div
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ])
}

export default NumberToWords
