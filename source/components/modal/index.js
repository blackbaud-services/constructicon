import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import Icon from '../icon'
import withStyles from '../with-styles'
import styles from './styles'

/**
 * Uses React Modal - https://github.com/reactjs/react-modal
 */
class Modal extends Component {
  componentDidMount () {
    const { appElement } = this.props

    if (appElement) {
      ReactModal.setAppElement(appElement)
    }

    this.calculateDocumentScroll(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.calculateDocumentScroll(nextProps)
    }
  }

  componentWillUnmount () {
    this.calculateDocumentScroll({ isOpen: false })
  }

  calculateDocumentScroll (props) {
    if (!props.enableDocumentScroll) {
      window.document.body.style.overflow = props.isOpen ? 'hidden' : 'auto'
      window.document.documentElement.style.overflow = props.isOpen
        ? 'hidden'
        : 'auto'
    }
  }

  render () {
    const {
      appElement,
      children,
      closeIcon,
      classNames,
      styles,
      ...props
    } = this.props

    return (
      <ReactModal
        style={{
          overlay: styles.overlay,
          content: styles.content
        }}
        className={{
          base: 'c11n-modal',
          afterOpen: 'c11n-modal-after-open',
          beforeClose: 'c11n-modal-before-close'
        }}
        overlayClassName={{
          base: 'c11n-modal-overlay',
          afterOpen: 'c11n-modal-overlay-after-open',
          beforeClose: 'c11n-modal-overlay-before-close'
        }}
        {...props}
      >
        {closeIcon && (
          <button
            className={classNames.close}
            onClick={props.onRequestClose}
            aria-label='Close'
            children={closeIcon}
          />
        )}
        <div className={classNames.container}>{children}</div>
      </ReactModal>
    )
  }
}

Modal.propTypes = {
  /**
   * A valid query selector for the element your React app is mounted to
   */
  appElement: PropTypes.string,

  /**
   * The content of the modal
   */
  children: PropTypes.any.isRequired,

  /**
   * Number indicating the milliseconds to wait before closing the modal.
   */
  closeTimeoutMS: PropTypes.number,

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
   * Function that will be run after the modal has opened.
   */
  onAfterOpen: PropTypes.func,

  /**
   * The callback to call when the modal should be closed
   */
  onRequestClose: PropTypes.func,

  /**
   * Specifies whether the modal closes on clicking overlay
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * A spacing object to determine the padding within the modal
   */
  spacing: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

  /**
   * Custom styles for the overlay, content, container or close
   */
  styles: PropTypes.object,

  /**
   * Enable scroll of document when modal is open
   */
  enableDocumentScroll: PropTypes.bool
}

Modal.defaultProps = {
  appElement: '#mount',
  closeIcon: <Icon name='close' />,
  shouldCloseOnOverlayClick: true,
  spacing: 1,
  styles: {}
}

export default withStyles(styles)(Modal)
