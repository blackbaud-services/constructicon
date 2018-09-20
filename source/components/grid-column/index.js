import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

const GridColumn = ({ children, classNames }) => (
  <div className={`c11n-grid-column ${classNames.root}`}>{children}</div>
)

GridColumn.propTypes = {
  /**
   * The content for the column
   */
  children: PropTypes.any,

  /**
   * The default size of the column in a 12 column grid
   */
  xs: PropTypes.number,

  /**
   * The size of the column in a 12 column grid at the `sm` breakpoint
   */
  sm: PropTypes.number,

  /**
   * The size of the column in a 12 column grid at the `md` breakpoint
   */
  md: PropTypes.number,

  /**
   * The size of the column in a 12 column grid at the `lg` breakpoint
   */
  lg: PropTypes.number,

  /**
   * The default alignment
   */
  xsAlign: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * The alignment at the `sm` breakpoint
   */
  smAlign: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * The alignment at the `md` breakpoint
   */
  mdAlign: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * The alignment at the `lg` breakpoint
   */
  lgAlign: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * The background color of the section -
   */
  background: PropTypes.string,

  /**
   * The color of the text -
   */
  foreground: PropTypes.string,

  /**
   * The color of the border
   */
  borderColor: PropTypes.string,

  /**
   * The width of the border
   */
  borderWidth: PropTypes.number,

  /**
   * The radius of the section -
   */
  radius: PropTypes.string,

  /**
   * The custom styles to be applied
   */
  styles: PropTypes.object
}

GridColumn.defaultProps = {
  xs: 12,
  borderColor: 'shade',
  styles: {}
}

export default withStyles(styles)(GridColumn)
