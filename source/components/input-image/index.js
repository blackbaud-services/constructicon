import React from 'react'
import PropTypes from 'prop-types'
import { formatFileSize } from '../../lib/files'
import withStyles from '../with-styles'
import styles from './styles'

import AvatarEditor from 'react-avatar-editor'
import Button from '../button'
import Dropzone from 'react-dropzone'
import InputValidations from '../input-validations'
import Label from '../label'
import Slider from 'react-slider'

class InputImage extends React.Component {
  constructor (props) {
    super(props)
    this.editor = null
    this.handleClearImage = this.handleClearImage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSetImage = this.handleSetImage.bind(this)
    this.setRef = this.setRef.bind(this)
    this.state = {
      image: props.value,
      zoom: 100,
      step: 0
    }
  }

  handleChange () {
    const canvas = this.editor.getImageScaledToCanvas()
    const context = canvas.getContext('2d')
    context.globalCompositeOperation = 'destination-over'
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)

    const image = canvas.toDataURL('image/jpeg', 1)

    this.props.onChange(image)
  }

  handleClearImage () {
    this.setState({ image: null })
    this.props.onChange(null)
  }

  handleSetImage (image) {
    const { onFileChange } = this.props

    this.setState({ image }, this.handleChange)
    onFileChange && onFileChange(image)
  }

  setRef (el) {
    this.editor = el
  }

  render () {
    const {
      buttonProps,
      classNames,
      error,
      height,
      label,
      note,
      required,
      validations,
      width
    } = this.props

    const { image, zoom } = this.state

    return (
      <div className={classNames.root}>
        <Label required={required}>{label}</Label>
        {image ? (
          <div>
            <AvatarEditor
              border={25}
              color={[0, 0, 0, 0.125]}
              height={height}
              image={image}
              onImageChange={this.handleChange}
              onImageReady={this.handleChange}
              ref={this.setRef}
              rotate={0}
              scale={zoom / 100}
              style={{ width: '100%', height: 'auto' }}
              width={width}
            />
            <button
              className={classNames.clear}
              onClick={this.handleClearImage}
            >
              Clear Image
            </button>
            <Slider
              className={classNames.slider}
              defaultValue={100}
              handleClassName={classNames.sliderHandle}
              min={0}
              max={200}
              onChange={zoom => this.setState({ zoom })}
            />
            {image.size && (
              <div className={classNames.note}>
                {`${image.name || 'upload.jpg'} (${formatFileSize(
                  image.size
                )})`}
              </div>
            )}
          </div>
        ) : (
          <div className={classNames.dropzoneContainer}>
            <Dropzone
              className={classNames.dropzone}
              onDrop={images => this.handleSetImage(images[0])}
            >
              <Button {...buttonProps}>Select Image</Button>
              <p>
                Upload an image or drop a file into this area
                {note && <small className={classNames.note}>{note}</small>}
              </p>
            </Dropzone>
          </div>
        )}
        {error && <InputValidations validations={validations} />}
      </div>
    )
  }
}

InputImage.defaultProps = {
  height: 500,
  width: 500
}

InputImage.propTypes = {
  /**
   * Props to be passed to the Button component
   */
  buttonProps: PropTypes.object,

  /**
   * The label for the field
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The name of the field
   */
  name: PropTypes.string.isRequired,

  /**
   * The change handler that will receive the updated value as it's only param
   */
  onChange: PropTypes.func.isRequired,

  /**
   * The change handler that will receive the updated file
   */
  onFileChange: PropTypes.func,

  /**
   * Mark the field as required and displays an asterisk next to the label
   */
  required: PropTypes.bool,

  /**
   * A note to show under the button
   */
  note: PropTypes.string
}

export default withStyles(styles)(InputImage)
