import React, { PropTypes } from 'react'
import { withStyles } from '../../../lib/css'
import styles from './styles'

const Leader = ({
  leader,
  classNames
}) => {
  const {
    href,
    image,
    title,
    subtitle,
    amount
  } = leader

  return (
    <li className={classNames.root}>
      <a href={href} target='_blank' className={classNames.link}>
        <img src={image} className={classNames.image} />
        <div className={classNames.info}>
          <div className={classNames.title}>{title}</div>
          {subtitle && <div className={classNames.subtitle}>{subtitle}</div>}
        </div>
        <div className={classNames.amount}>{amount}</div>
      </a>
    </li>
  )
}

Leader.propTypes = {
  /**
  * The leader to be shown
  */
  leader: PropTypes.object.isRequired
}

export default withStyles(styles)(Leader)
