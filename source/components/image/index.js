import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const Image = ({ alt, classNames, src }) => (
  <img alt={alt} className={classNames.root} src={src} />
)

Image.propTypes = {
  /**
   * The alt tag
   */
  alt: PropTypes.string.isRequired,

  /**
   * The max height of the image (rhythm units)
   */
  maxHeight: PropTypes.number,

  /**
   * The max width of the image (rhythm units)
   */
  maxWidth: PropTypes.number,

  /**
   * The image src
   */
  src: PropTypes.string.isRequired,

  /**
   * Custom styles to apply to the image
   */
  styles: PropTypes.object
}

export default withStyles(styles)(Image)
