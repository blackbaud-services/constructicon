import React, { PropTypes } from 'react'
import ReactModal from 'react-modal'
import Icon from '../Icon'
import { withStyles } from '../../lib/css'
import styles from './styles'

/**
* Uses React Modal - https://github.com/reactjs/react-modal
*/
const Modal = ({
  children,
  closeIcon,
  classNames,
  styles,
  ...props
}) => (
  <ReactModal style={styles.wrapper} {...props}>
    {closeIcon && (
      <button
        className={classNames.close}
        onClick={props.onRequestClose}
        children={closeIcon}
      />
    )}
    <div className={classNames.container}>
      {children}
    </div>
  </ReactModal>
)

Modal.propTypes = {
  /**
  * The content of the modal
  */
  children: PropTypes.any.isRequired,

  /**
  * A react-modal required prop for accessibility
  */
  contentLabel: PropTypes.string.isRequired,

  /**
  * The close icon (set to false to hide)
  */
  closeIcon: PropTypes.any,

  /**
  * Specifies whether the modal is open or not
  */
  isOpen: PropTypes.bool,

  /**
  * The callback to call when the modal should be closed
  */
  onRequestClose: PropTypes.func,

  /**
  * A spacing object to determine the padding within the modal
  */
  spacing: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),

  /**
  * Custom styles for the overlay, content, container or close
  */
  styles: PropTypes.object
}

Modal.defaultProps = {
  closeIcon: <Icon name='close' />,
  spacing: 1,
  styles: {}
}

export default withStyles(styles)(Modal)
