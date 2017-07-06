import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import styles from './styles'

const LeaderboardItem = ({
  href,
  image,
  title,
  subtitle,
  amount,
  classNames
}) => (
  <li className={classNames.root}>
    <a href={href} target='_blank' className={classNames.link}>
      {image && <img src={image} className={classNames.image} />}
      <div className={classNames.info}>
        <div className={classNames.title}>{title}</div>
        {subtitle && <div className={classNames.subtitle}>{subtitle}</div>}
      </div>
      {amount && <div className={classNames.amount}>{amount}</div>}
    </a>
  </li>
)

LeaderboardItem.propTypes = {
  /**
  * The url of the leader's page
  */
  href: PropTypes.string,

  /**
  * The avatar for the leader
  */
  image: PropTypes.string,

  /**
  * The name or title of the leader
  */
  title: PropTypes.string.isRequired,

  /**
  * The charity or subtitle of the leader
  */
  subtitle: PropTypes.string,

  /**
  * The rank of the leader (optional)
  */
  rank: PropTypes.number,

  /**
  * The amount being ranked by
  */
  amount: PropTypes.string,

  /**
  * The custom styles to be applied
  */
  styles: PropTypes.object
}

LeaderboardItem.defaultProps = {
  href: '#',
  styles: {}
}

export default withStyles(styles)(LeaderboardItem)
