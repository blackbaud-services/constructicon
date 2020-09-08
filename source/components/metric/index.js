import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import withStyles from '../with-styles'
import styles from './styles'

const Metric = ({
  label,
  amount,
  amountLabel,
  icon,
  tag: Tag,
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
    <Tag className={`c11n-metric ${classNames.root}`}>
      {renderIcon()}
      {label && <div className={classNames.label}>{label}</div>}
      {amount && (
        <div className={classNames.amount} aria-label={amountLabel}>
          {amount}
        </div>
      )}
    </Tag>
  )
}

Metric.propTypes = {
  /**
   * The label to be displayed
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The actual amount
   */
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
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

  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),

  /**
   * The aria-label for the amount e.g. 11 miles for an amount of 11 mi.
   */
  amountLabel: PropTypes.string,

  /**
   * Custom styles to be applied
   */
  styles: PropTypes.object
}

Metric.defaultProps = {
  align: 'center',
  styles: {},
  tag: 'div'
}

export default withStyles(styles)(Metric)
