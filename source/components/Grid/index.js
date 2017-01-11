import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'

const Grid = ({
  children,
  classNames
}) => (
  <div className={classNames.root}>
    {children}
  </div>
)

Grid.propTypes = {
  /**
  * Single or array of GridColumn children
  */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,

  /**
  * Flexbox align option
  */
  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch'
  ]),

  /**
  * Flexbox justify content options
  */
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'space-between',
    'space-around'
  ]),

  /**
  * Direction of the columns
  */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),

  /**
  * The spacing to be applied
  */
  spacing: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),

  /**
  * Custom styles to apply
  */
  styles: PropTypes.object
}

Grid.defaultProps = {
  align: 'flex-start',
  justify: 'space-between',
  direction: 'row',
  spacing: 0,
  styles: {}
}

export default withStyles(styles)(Grid)
