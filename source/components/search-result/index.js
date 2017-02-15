import React, { PropTypes } from 'react'
import Button from '../button'
import { withStyles } from '../../lib/css'
import styles from './styles'

const SearchResult = ({
  cta,
  image,
  subtitle,
  title,
  url,
  classNames
}) => (
  <li className={classNames.wrapper}>
    { image
      ? (
        <div>
          <img src={image} className={classNames.avatar} />
        </div>
      ) : (
        <div className={classNames.placeholder} />
      )
    }
    <div className={classNames.titles}>
      <h4 className={classNames.title}>{title}</h4>
      { subtitle && <h6 className={classNames.subtitle}>{subtitle}</h6> }
    </div>
    { url && <div>
      <Button tag='a' href={url} target='_blank'>Support</Button>
    </div> }
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
  * URL for the CTA
  */
  url: PropTypes.string
}

SearchResult.defaultProps = {}

export default withStyles(styles)(SearchResult)
