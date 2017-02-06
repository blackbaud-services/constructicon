import React, { PropTypes } from 'react'
import Button from '../Button'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Result = ({
  cta,
  image,
  subtitle,
  title,
  url
}) => (
  <li>
    <div>
      <img src={image} />
    </div>
    <div>
      <h4>{title}</h4>
      <h6>{subtitle}</h6>
    </div>
    <div>
      <Button tag='a' href={url} target='_blank'>Support</Button>
    </div>
  </li>
)

Result.propTypes = {
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
  title: PropTypes.string,

  /**
  * Additional text to display below the title
  */
  subtitle: PropTypes.string,

  /**
  * URL for the CTA
  */
  url: PropTypes.string
}

Result.defaultProps = {}

export default withStyles(styles)(Result)
