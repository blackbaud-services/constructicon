import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const InputValidations = ({ classNames, validations = [] }) => (
  <div className={`c11n-input-validations ${classNames.root}`}>
    {validations.map((error, i) => (
      <div className={classNames.error} key={i}>
        {error}
      </div>
    ))}
  </div>
)

InputValidations.propTypes = {
  /**
   * An array of input validations
   */
  validations: PropTypes.array,

  /**
   *
   */
  styles: PropTypes.object
}

InputValidations.defaultProps = {}

export default withStyles(styles)(InputValidations)
