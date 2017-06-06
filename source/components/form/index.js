import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import styles from './styles'

import Button from '../button'

const Form = ({
  onSubmit,
  errors = [],
  submit = 'Submit',
  isLoading = false,
  isDisabled = false,
  footer,
  children,
  classNames,
  styles,
  noValidate
}) => (
  <form
    className={classNames.form}
    method='POST'
    onSubmit={onSubmit}
    noValidate={noValidate}>

    <div className={classNames.fields}>
      {children}
    </div>

    {errors.map((error, i) => (
      <div className={`${classNames.error} ${error.status && classNames[error.status]}`} key={i}>
        {error.field ? `Field ${error.field} ` : ''}
        {error.message}
      </div>
    ))}

    {submit && (
      <Button
        block
        styles={styles.submit}
        disabled={isLoading || isDisabled}
        type='submit'>
        {submit}
      </Button>
    )}

    {footer}
  </form>
)

Form.propTypes = {
  /**
  * Errors to be displayed
  */
  errors: PropTypes.array,

  /**
  * Disable form inputs
  */
  isDisabled: PropTypes.bool,

  /**
  * Show loading animation / disable form inputs
  */
  isLoading: PropTypes.bool,

  /**
  * The submit handler that will fire once the form is submitted
  */
  onSubmit: PropTypes.func.isRequired,

  /**
  * The label for the submit button
  */
  submit: PropTypes.string
}

Form.defaultProps = {
  submit: 'Submit'
}

export default withStyles(styles)(Form)
