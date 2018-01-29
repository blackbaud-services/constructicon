import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import compose from '../../lib/compose'
import withStyles from '../with-styles'
import withToggle from '../with-toggle'
import styles from './styles'

const Accordion = ({
  children,
  title,
  opened,
  closed,
  toggled,
  onToggle,
  classNames
}) => (
  <div className={`c11n-accordion ${classNames.root}`}>
    <div className={classNames.head} onClick={onToggle}>
      <div className={classNames.toggle}>
        {toggled ? opened : closed}
      </div>
      <div className={classNames.title}>{title}</div>
    </div>
    <div className={classNames.body}>
      {children}
    </div>
  </div>
)

Accordion.propTypes = {
  /**
  * The content of the Accordion
  */
  children: PropTypes.any.isRequired,

  /**
  * The title of the section
  */
  title: PropTypes.any.isRequired,

  /**
  * The size of the gutter to be passed through rhythm
  */
  gutter: PropTypes.number,

  /**
  * Add or remove the border to the accordion
  */
  border: PropTypes.bool,

  /**
  * The color to apply to icon/border when active
  */
  color: PropTypes.string,

  /**
  * The font treatment to be used for the title
  */
  font: PropTypes.string,

  /**
  * Opens the accordion by default
  */
  toggled: PropTypes.bool,

  /**
  * Icon to show when the panel is open
  */
  opened: PropTypes.any,

  /**
  * Icon to show when the panel is closed
  */
  closed: PropTypes.any,

  /**
  * Custom styles be applied { root, head, title, body }
  */
  styles: PropTypes.object
}

Accordion.defaultProps = {
  gutter: 1,
  border: true,
  color: 'primary',
  font: 'head',
  opened: <Icon name='minus' />,
  closed: <Icon name='plus' />,
  styles: {}
}

export default compose(
  withToggle,
  withStyles(styles)
)(Accordion)
