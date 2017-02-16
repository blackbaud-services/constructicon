import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'

const SearchResult = ({
  cta,
  image,
  subtitle,
  title,
  children,
  classNames
}) => (
  <li className={classNames.wrapper}>
    {image && (
      <div>
        <img src={image} className={classNames.avatar} />
      </div>
    )}
    <div className={classNames.titles}>
      <h4 className={classNames.title}>{title}</h4>
      {subtitle && <h6 className={classNames.subtitle}>{subtitle}</h6>}
    </div>
    <div>
      {children}
    </div>
  </li>
)

SearchResult.propTypes = {
  /**
  * The label for the CTA Button
  */
  cta: PropTypes.string,

  /**
  * Image URL
  */
  image: PropTypes.string,

  /**
  * Name of the result to display
  */
  title: PropTypes.string.isRequired,

  /**
  * Additional text to display below the title
  */
  subtitle: PropTypes.string,

  /**
  * Placed on the right hand side button area
  */
  children: PropTypes.element
}

export default withStyles(styles)(SearchResult)
