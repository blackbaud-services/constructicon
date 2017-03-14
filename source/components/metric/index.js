import React, { PropTypes } from 'react'
import Icon from '../icon'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Metric = ({
  label,
  amount,
  icon,
  classNames,
  styles
}) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <Icon name={icon} styles={styles.icon} size={1.5} />
    } else if (Array.isArray(icon)) {
      return <Icon paths={icon} styles={styles.icon} size={1.5} />
    } else {
      return icon
    }
  }

  return (
    <div className={classNames.root}>
      {renderIcon()}
      <div className={classNames.label}>{label}</div>
      <div className={classNames.amount}>{amount}</div>
    </div>
  )
}

Metric.propTypes = {
  /**
  * The label to be displayed
  */
  label: PropTypes.string.isRequired,

  /**
  * The actual amount
  */
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,

  /**
  * The icon to display above the metric
  */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]),

  /**
  * Custom styles to be applied
  */
  styles: PropTypes.object
}

Metric.defaultProps = {
  styles: {}
}

export default withStyles(styles)(Metric)
