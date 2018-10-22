import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'
import Section from '../section'

const InputSearchResult = ({ children, isActive, spacing, styles }) => (
  <Section
    background={isActive ? 'shade' : 'light'}
    spacing={spacing}
    styles={styles.root}
  >
    {children}
  </Section>
)

InputSearchResult.propTypes = {
  /**
   * The contents of the search result
   */
  children: PropTypes.any.isRequired,

  /**
   * Whether the item is the actively selected result
   */
  isActive: PropTypes.bool,

  /**
   * The spacing to be applied to the result
   */
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

  /**
   * Custom styles to be applied
   */
  styles: PropTypes.object
}

InputSearchResult.defaultProps = {
  spacing: { x: 1, y: 0.5 }
}

export default withStyles(styles)(InputSearchResult)
