import React from "react";
import PropTypes from "prop-types";
import withStyles from "../with-styles";
import styles from "./styles";

import AvatarEditor from "react-avatar-editor";
import Button from "../button";
import Dropzone from "react-dropzone";
import Icon from "../icon";
import InputValidations from "../input-validations";
import Label from "../label";
import Loading from "../loading";
import Slider from "react-slider";

class InputImage extends React.Component {
  constructor(props) {
    super(props);
    this.editor = null;
    this.getImageProperties = this.getImageProperties.bind(this);
    this.handleCaptureImage = this.handleCaptureImage.bind(this);
    this.handleClearImage = this.handleClearImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOrientationChange = this.handleOrientationChange.bind(this);
    this.handleRotateImage = this.handleRotateImage.bind(this);
    this.handleSetImage = this.handleSetImage.bind(this);
    this.setRef = this.setRef.bind(this);
    this.state = {
      flip: false,
      height: props.height,
      image:
        props.value && props.value.indexOf("base64") > -1 ? props.value : null,
      input: "default",
      loading: false,
      orientation: props.height > props.width ? "portrait" : "landscape",
      rotate: 0,
      settings: {},
      stream: null,
      width: props.width,
      zoom: 100,
    };
  }

  componentWillUnmount() {
    this.handleStopVideo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.value && prevProps.overlay !== this.props.overlay) {
      setTimeout(this.handleChange, 150);
    }
  }

  handleStopVideo() {
    if (this.state.stream) {
      this.state.stream.getTracks().forEach((track) => track.stop());
    }
  }

  handleChange() {
    const canvas = this.editor.getImageScaledToCanvas();
    const context = canvas.getContext("2d");

    context.globalCompositeOperation = "destination-over";
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    if (this.props.overlay) {
      context.globalCompositeOperation = "source-over";
      context.drawImage(this.refs.overlay, 0, 0, canvas.width, canvas.height);
    }

    const image = canvas.toDataURL("image/jpeg", 1);

    this.props.onChange(image);
  }

  handleStartCamera() {
    const { width, height } = this.props;

    this.setState({ input: "camera", flip: true, loading: true });

    navigator.mediaDevices
      .getUserMedia({
        video: {
          aspectRatio: { exact: 1 },
          facingMode: "user",
          width,
          height,
        },
        audio: false,
      })
      .then((stream) => {
        const [track] = stream.getVideoTracks();
        const settings = track.getSettings();

        this.setState({ settings, stream }, () => {
          if (this.video) {
            this.video.srcObject = stream;
            this.video.play();
            this.video.onloadedmetadata = () => {
              this.video.play();
              this.setState({ loading: false });
            };
          }
        });
      })
      .catch((err) => {
        console.log("An error occurred: " + err);
        this.setState({ input: "default", loading: false });
      });
  }

  handleCaptureImage() {
    const { width, height } = this.state.settings;
    const context = this.canvas.getContext("2d");

    this.canvas.width = width;
    this.canvas.height = height;

    if (this.state.flip) {
      context.translate(context.canvas.width, 0);
      context.scale(-1, 1);
    }

    context.drawImage(this.video, 0, 0, width, height);

    this.canvas.toBlob(
      (blob) => {
        this.handleSetImage(new File([blob], "photo.jpg"));
        this.handleStopVideo();
      },
      "image/jpeg",
      1
    );
  }

  handleClearImage(event) {
    const { width, height, onChange } = this.props;
    const isCameraInput = this.state.input === "camera";

    event.preventDefault();

    if (isCameraInput) this.handleStartCamera();

    this.setState({
      flip: isCameraInput,
      height,
      image: null,
      orientation: height > width ? "portrait" : "landscape",
      rotate: 0,
      width,
      zoom: 100,
    });

    onChange(null);
  }

  handleOrientationChange(event) {
    const { width, height, orientation } = this.state;

    event.preventDefault();

    if (this.props.orientationChange) {
      this.setState(
        {
          orientation: orientation === "landscape" ? "portrait" : "landscape",
          width: height,
          height: width,
        },
        this.handleChange
      );
    }
  }

  handleRotateImage(event) {
    const { width, height, rotate } = this.state;

    event.preventDefault();
    this.setState(
      { rotate: rotate + 90, width: height, height: width },
      this.handleChange
    );
  }

  getImageProperties(image) {
    const { maxSize } = this.props;
    const orientation = image.height > image.width ? "portrait" : "landscape";
    const aspectRatio = image.width / image.height;

    if (orientation === "portrait") {
      const height = Math.min(image.height, maxSize);
      const width = height * aspectRatio;

      return { width, height, orientation };
    }

    const width = Math.min(image.width, maxSize);
    const height = width / aspectRatio;

    return { width, height, orientation };
  }

  handleSetImage(image) {
    const { onFileChange, resizeOnUpload } = this.props;
    const reader = new window.FileReader();
    const img = new window.Image();

    if (resizeOnUpload) {
      reader.readAsDataURL(image);
      reader.onload = (event) => {
        img.src = event.target.result;
        img.onload = () => {
          const { width, height, orientation } = this.getImageProperties(img);
          this.setState(
            { image, orientation, width, height },
            this.handleChange
          );
        };
      };
    } else {
      this.setState({ image }, this.handleChange);
    }

    onFileChange && onFileChange(image);
  }

  setRef(el) {
    this.editor = el;
  }

  render() {
    const {
      borderWidth,
      buttonProps,
      camera,
      classNames,
      error,
      label,
      maxFiles,
      multiple,
      note,
      orientationChange,
      overlay,
      required,
      styles,
      validations,
    } = this.props;

    const {
      flip,
      height,
      image,
      input,
      orientation,
      rotate,
      settings,
      width,
      zoom,
    } = this.state;

    // Style fix for Firefox not respecting aspect ratio options
    const videoStyles = {
      width: `${(settings.width / settings.height) * 100}%`,
      left: `${(100 - (settings.width / settings.height) * 100) / 2}%`,
      transform: flip && "scaleX(-1)",
    };

    return (
      <div className={classNames.root}>
        <Label required={required}>{label}</Label>
        {image ? (
          <div className={classNames.image}>
            <div className={classNames.editor}>
              <AvatarEditor
                border={overlay ? 0 : Math.max(width, height) * borderWidth}
                className={classNames.canvas}
                disableBoundaryChecks={!!overlay}
                color={[0, 0, 0, 0.125]}
                disableHiDPIScaling
                height={height}
                image={image}
                onImageChange={this.handleChange}
                onImageReady={this.handleChange}
                ref={this.setRef}
                rotate={rotate}
                scale={zoom / 100}
                style={{ width: "100%", height: "auto" }}
                width={width}
              />
            </div>
            {orientationChange && (
              <Button
                background="light"
                foreground="dark"
                spacing={0.25}
                styles={styles.orientation}
                onClick={this.handleOrientationChange}
                title={`Change to ${
                  orientation === "portrait" ? "landscape" : "portrait"
                } orientation.`}
              >
                <Icon
                  name={orientation === "portrait" ? "image" : "portrait"}
                />
              </Button>
            )}
            <div>
              {image.name && (
                <span className={classNames.fileInfo}>{image.name}</span>
              )}
              <Button
                background="transparent"
                effect="grow"
                spacing={0.5}
                foreground="dark"
                className={classNames.clear}
                onClick={this.handleClearImage}
              >
                {input === "camera" ? "Retake photo?" : "Clear image"}
              </Button>
            </div>
            <div className={classNames.controls}>
              <Slider
                ariaLabel="Zoom"
                ariaValuetext={`Zoom: ${zoom}%`}
                className={classNames.slider}
                trackClassName={classNames.sliderTrack}
                thumbClassName={classNames.sliderHandle}
                defaultValue={100}
                min={0}
                max={200}
                onChange={(zoom) => this.setState({ zoom })}
                value={zoom}
                renderThumb={(props, state) => (
                  <div {...props}>
                    <Icon styles={styles.icon} name="search" size={0.75} />
                  </div>
                )}
              />
              <Button
                background="transparent"
                foreground="dark"
                effect="grow"
                spacing={0}
                onClick={this.handleRotateImage}
              >
                <Icon name="rotate" size={1.5} rotate={rotate} />
              </Button>
            </div>
          </div>
        ) : input === "camera" ? (
          <div className={classNames.cameraContainer}>
            <div
              className={[classNames.editor, classNames.cameraPreview].join(
                " "
              )}
            >
              <video
                autoPlay
                playsInline
                ref={(video) => (this.video = video)}
                className={classNames.video}
                height={height}
                width={width}
                style={videoStyles}
              />
              {this.state.loading && (
                <div className={classNames.loading}>
                  <Loading />
                </div>
              )}
              <Button
                background="transparent"
                foreground="dark"
                effect="grow"
                spacing={0}
                onClick={() => this.setState({ flip: !flip })}
                styles={styles.flip}
              >
                <Icon
                  name="flip"
                  size={1.5}
                  styles={{ transform: flip && "scaleX(-1)" }}
                />
              </Button>
            </div>
            <Button {...buttonProps} onClick={this.handleCaptureImage}>
              Capture photo
            </Button>
            <div>
              <Button
                background="transparent"
                effect="grow"
                spacing={0.5}
                foreground="dark"
                className={classNames.clear}
                onClick={() => {
                  this.handleStopVideo();
                  this.setState({ input: "default" });
                }}
              >
                Upload an image
              </Button>
            </div>
            <canvas
              className={classNames.hidden}
              ref={(canvas) => (this.canvas = canvas)}
            />
          </div>
        ) : (
          <div className={classNames.dropzoneContainer}>
            <Dropzone
              accept="image/*"
              maxFiles={maxFiles}
              multiple={multiple}
              onDrop={(images) => this.handleSetImage(images[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className={classNames.dropzone}>
                  <input {...getInputProps()} />
                  <Button {...buttonProps}>
                    <Icon name="image" />
                    <span>Select Image</span>
                  </Button>
                  {camera && (
                    <Button
                      {...buttonProps}
                      onClick={(event) => {
                        event.stopPropagation();
                        this.handleStartCamera();
                      }}
                    >
                      <Icon name="camera" />
                      <span>Use your camera</span>
                    </Button>
                  )}
                  <p>
                    Upload an image or drop a file into this area
                    {note && <small className={classNames.note}>{note}</small>}
                  </p>
                </div>
              )}
            </Dropzone>
          </div>
        )}
        {error && <InputValidations validations={validations} />}
        {overlay && (
          <img
            className={classNames.hidden}
            crossOrigin="anonymous"
            src={overlay}
            ref="overlay"
          />
        )}
      </div>
    );
  }
}

InputImage.defaultProps = {
  borderWidth: 0.05,
  height: 500,
  maxFiles: 1,
  maxSize: 1600,
  maxWidth: 350,
  multiple: false,
  width: 500,
};

InputImage.propTypes = {
  /**
   * Border width (as fraction of total width)
   */
  borderWidth: PropTypes.number,

  /**
   * Props to be passed to the Button component
   */
  buttonProps: PropTypes.object,

  /**
   * Allow camera input?
   */
  camera: PropTypes.bool,

  /**
   * The label for the field
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The max number of files accepted
   */
  maxFiles: PropTypes.number,

  /**
   * The max width/length of an uploaded image
   */
  maxSize: PropTypes.number,

  /**
   * Allow multiple files?
   */
  multiple: PropTypes.bool,

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
   * Overlay image URL (resource URL must support CORS)
   */
  overlay: PropTypes.string,

  /**
   * Resize canvas on image upload to match image dimensions
   */
  resizeOnUpload: PropTypes.bool,

  /**
   * Mark the field as required and displays an asterisk next to the label
   */
  required: PropTypes.bool,

  /**
   * A note to show under the button
   */
  note: PropTypes.string,
};

export default withStyles(styles)(InputImage);
