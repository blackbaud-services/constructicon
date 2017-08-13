import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import styles from './styles'

import Button from '../button'
import Icon from '../icon'

const Form = ({
  children,
  classNames,
  errors = [],
  footer,
  icon,
  isLoading = false,
  isDisabled = false,
  noValidate,
  styles,
  submit = 'Submit',
  onSubmit
}) => {
  const renderIcon = () => {
    return typeof icon === 'object'
      ? <Icon styles={styles.icon} {...icon} />
      : <Icon styles={styles.icon} name={icon} />
  }

  return (
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
          <span>{submit}</span>
          {icon && renderIcon()}
        </Button>
      )}

      {footer}
    </form>
  )
}

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
  submit: PropTypes.string,

  /**
  * The name of the icon to add, an object of to pass to the Icon component, or false to hide
  */
  icon: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool
  ])
}

Form.defaultProps = {
  submit: 'Submit',
  icon: { name: 'chevron', size: 0.75 }
}

export default withStyles(styles)(Form)
