import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const RichText = ({ children, tag: Tag, classNames }) => {
  if (!children) {
    return null
  }

  return (
    <Tag className={`c11n-rich-text ${classNames.root}`}>
      {typeof children === 'string' ? (
        <span dangerouslySetInnerHTML={{ __html: children }} />
      ) : (
        children
      )}
    </Tag>
  )
}

RichText.propTypes = {
  /**
   * The html to be structured
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),

  /**
   * The tag to be used for the containing element
   */
  tag: PropTypes.string,

  /**
   * The base font size to use
   */
  size: PropTypes.number,

  /**
   * The number of lines to clamp
   */
  lineClamp: PropTypes.number,

  /**
   * Custom styles to be added to the element
   */
  styles: PropTypes.object
}

RichText.defaultProps = {
  size: 0,
  styles: {},
  tag: 'div'
}

export default withStyles(styles)(RichText)
