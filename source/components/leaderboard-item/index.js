import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const LeaderboardItem = ({
  amount,
  classNames,
  href,
  image,
  linkTag: LinkTag,
  linkProps,
  rank,
  subtitle,
  target,
  title
}) => {
  return (
    <li className={`c11n-leaderboard-item ${classNames.root}`}>
      <LinkTag
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener' : undefined}
        {...linkProps}
      >
        <div className={classNames.link}>
          {rank && <div className={classNames.rank}>{rank}</div>}
          {image && (
            <img src={image} alt={title} className={classNames.image} />
          )}
          <div className={classNames.info}>
            <div className={classNames.title}>{title}</div>
            {subtitle && <div className={classNames.subtitle}>{subtitle}</div>}
          </div>
          {amount && <div className={classNames.amount}>{amount}</div>}
        </div>
      </LinkTag>
    </li>
  )
}

LeaderboardItem.propTypes = {
  /**
   * The tag or component to be used as the link. e.g. `a`, React Router `Link`
   */
  linkTag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),

  /**
   * Props to be applied to the linkTag
   */
  linkProps: PropTypes.object,

  /**
   * The url of the leader's page. Passed to linkTag as `href` prop
   */
  href: PropTypes.string,

  /**
   * The target for the link. e.g. `_blank`
   */
  target: PropTypes.string,

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
  linkTag: 'a',
  target: '_blank',
  href: '#',
  styles: {}
}

export default withStyles(styles)(LeaderboardItem)
