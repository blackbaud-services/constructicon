import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

import AvatarEditor from 'react-avatar-editor'
import Button from '../button'
import Dropzone from 'react-dropzone'
import InputValidations from '../input-validations'
import Label from '../label'
import Slider from 'react-slider'

class InputImage extends React.Component {
  constructor () {
    super()
    this.editor = null
    this.handleClearImage = this.handleClearImage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setRef = this.setRef.bind(this)
    this.state = {
      image: null,
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

  setRef (el) {
    this.editor = el
  }

  render () {
    const {
      buttonProps,
      classNames,
      error,
      label,
      note,
      required,
      validations
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
              height={500}
              image={image}
              onImageChange={this.handleChange}
              onImageReady={this.handleChange}
              ref={this.setRef}
              rotate={0}
              scale={zoom / 100}
              style={{ width: '100%', height: 'auto' }}
              width={500}
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
          </div>
        ) : (
          <div className={classNames.dropzoneContainer}>
            <Dropzone
              className={classNames.dropzone}
              onDrop={images => this.setState({ image: images[0] })}
            >
              <Button {...buttonProps}>Select Image</Button>
              <p>
                Upload an image or drop a file into this area
                {note && <small>{note}</small>}
              </p>
            </Dropzone>
          </div>
        )}
        {error && <InputValidations validations={validations} />}
      </div>
    )
  }
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
   * Mark the field as required and displays an asterisk next to the label
   */
  required: PropTypes.bool,

  /**
   * A note to show under the button
   */
  note: PropTypes.string
}

export default withStyles(styles)(InputImage)
