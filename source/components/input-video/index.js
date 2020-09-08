import React from 'react'
import PropTypes from 'prop-types'
import { fetchOembedUrl, videoRegex } from '../../lib/oembed'
import withStyles from '../with-styles'
import styles from './styles'

import InputField from '../input-field'

class InputVideo extends React.Component {
  constructor (props) {
    super(props)
    this.handleClear = this.handleClear.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      video: props.value,
      status: 'empty'
    }
  }

  componentDidMount () {
    this.handleChange(this.props.value)
  }

  handleChange (val) {
    if (!val) {
      this.setState({ status: 'empty', video: null })
      return this.props.onChange('')
    }

    if (videoRegex.test(val)) {
      Promise.resolve()
        .then(() => this.setState({ status: 'fetching' }))
        .then(() => fetchOembedUrl(val))
        .then(video => {
          if (video.type !== 'video') {
            return this.setState({ status: 'failed' })
          }

          this.setState({ video, status: 'fetched' })
          this.props.onVideoChange && this.props.onVideoChange(video)
        })
        .catch(() => this.setState({ status: 'failed' }))
    } else {
      this.setState({ status: 'failed' })
    }

    this.props.onChange(val)
  }

  handleClear () {
    this.setState({ status: 'empty', video: null })
    this.props.onChange('')
    this.input.focus()
  }

  render () {
    const { video, status } = this.state
    const {
      classNames,
      note,
      onBlur,
      onChange,
      onVideoChange,
      styles = {},
      value,
      type = 'search',
      ...props
    } = this.props

    return (
      <div className={classNames.root}>
        <InputField
          {...props}
          setRef={ref => {
            this.input = ref
          }}
          type={type}
          onChange={this.handleChange}
          value={value}
          status={status}
          styles={styles.input}
        />
        {video ? (
          <div className={classNames.video}>
            {video.html && (
              <div dangerouslySetInnerHTML={{ __html: video.html }} />
            )}
            <button className={classNames.clear} onClick={this.handleClear}>
              Clear Video
            </button>
          </div>
        ) : (
          <div>{note && <small className={classNames.note}>{note}</small>}</div>
        )}
      </div>
    )
  }
}

InputVideo.propTypes = {
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
   * The change handler that will receive the updated video information
   */
  onVideoChange: PropTypes.func,

  /**
   * Mark the field as required and displays an asterisk next to the label
   */
  required: PropTypes.bool,

  /**
   * A note to show under the button
   */
  note: PropTypes.string
}

export default withStyles(styles)(InputVideo)
