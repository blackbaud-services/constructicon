import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'

import AvatarEditor from 'react-avatar-editor'
import Button from '../button'
import Dropzone from 'react-dropzone'
import Icon from '../icon'
import InputValidations from '../input-validations'
import Label from '../label'
import Slider from 'react-slider'

class InputImage extends React.Component {
  constructor (props) {
    super(props)
    this.editor = null
    this.handleClearImage = this.handleClearImage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOrientationChange = this.handleOrientationChange.bind(this)
    this.handleRotateImage = this.handleRotateImage.bind(this)
    this.handleSetImage = this.handleSetImage.bind(this)
    this.setRef = this.setRef.bind(this)
    this.state = {
      height: props.height,
      image:
        props.value && props.value.indexOf('base64') > -1 ? props.value : null,
      orientation: props.height > props.width ? 'portrait' : 'landscape',
      rotate: 0,
      width: props.width,
      zoom: 100
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

  handleClearImage (event) {
    const { width, height, onChange } = this.props

    event.preventDefault()
    this.setState({
      height,
      image: null,
      orientation: height > width ? 'portrait' : 'landscape',
      rotate: 0,
      width,
      zoom: 100
    })

    onChange(null)
  }

  handleOrientationChange (event) {
    const { width, height, orientation } = this.state

    event.preventDefault()

    if (this.props.orientationChange) {
      this.setState(
        {
          orientation: orientation === 'landscape' ? 'portrait' : 'landscape',
          width: height,
          height: width
        },
        this.handleChange
      )
    }
  }

  handleRotateImage (event) {
    const { width, height, rotate } = this.state

    event.preventDefault()
    this.setState(
      { rotate: rotate + 90, width: height, height: width },
      this.handleChange
    )
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
      label,
      note,
      orientationChange,
      required,
      styles,
      validations
    } = this.props

    const { height, image, orientation, rotate, width, zoom } = this.state

    return (
      <div className={classNames.root}>
        <Label required={required}>{label}</Label>
        {image ? (
          <div className={classNames.image}>
            <AvatarEditor
              border={25}
              color={[0, 0, 0, 0.125]}
              height={height}
              image={image}
              onImageChange={this.handleChange}
              onImageReady={this.handleChange}
              ref={this.setRef}
              rotate={rotate}
              scale={zoom / 100}
              style={{ width: '100%', height: 'auto' }}
              width={width}
            />
            {orientationChange && (
              <Button
                background='light'
                foreground='dark'
                spacing={0.25}
                styles={styles.orientation}
                onClick={this.handleOrientationChange}
              >
                <Icon
                  name={orientation === 'portrait' ? 'image' : 'portrait'}
                />
              </Button>
            )}
            <div>
              <span className={classNames.fileInfo}>
                {`${image.name || 'image.jpg'}`}
              </span>
              <Button
                background='transparent'
                effect='grow'
                spacing={0.5}
                foreground='dark'
                className={classNames.clear}
                onClick={this.handleClearImage}
              >
                Clear Image
              </Button>
            </div>
            <div className={classNames.controls}>
              <Slider
                ariaLabel='Zoom'
                ariaValuetext={`Zoom: ${zoom}%`}
                className={classNames.slider}
                trackClassName={classNames.sliderTrack}
                thumbClassName={classNames.sliderHandle}
                defaultValue={100}
                min={0}
                max={200}
                onChange={zoom => this.setState({ zoom })}
                value={zoom}
                renderThumb={(props, state) => (
                  <div {...props}>
                    <Icon styles={styles.icon} name='search' size={0.75} />
                  </div>
                )}
              />
              <Button
                background='transparent'
                foreground='dark'
                effect='grow'
                spacing={0}
                onClick={this.handleRotateImage}
              >
                <Icon name='rotate' size={1.5} rotate={rotate} />
              </Button>
            </div>
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
  width: 500,
  maxWidth: 350
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
   * Allow user to change orientation of image
   */
  orientationChange: PropTypes.bool,

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
