import React, { Component } from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
import range from 'lodash/range'
import pick from 'lodash/pick'
import withStyles from '../with-styles'
import styles from './styles'

import InputField from '../input-field'
import InputSelect from '../input-select'
import InputValidations from '../input-validations'
import Label from '../label'

class InputDate extends Component {
  constructor (props) {
    super(props)
    this.updateDateFragment = this.updateDateFragment.bind(this)
    this.updateDate = this.updateDate.bind(this)

    this.state = {
      touched: !!props.value,
      showSelects: props.showSelects,
      value: props.value,
      date: props.value ? dayjs(props.value) : dayjs(props.default)
    }
  }

  testDateInput () {
    try {
      const test = document.createElement('input')
      test.type = 'date'
      return test.type === 'text'
    } catch (error) {
      return true
    }
  }

  componentDidMount () {
    if (this.testDateInput()) this.setState({ showSelects: true })
  }

  updateDateFragment (type) {
    return value => {
      if (!value) {
        return
      }

      return this.updateDate(this.state.date[type](value))
    }
  }

  updateDate (moment) {
    this.setState({ date: moment, touched: true })
    this.props.onChange(dayjs(moment).format('YYYY-MM-DD'))
  }

  render () {
    const {
      required = false,
      classNames,
      error,
      id,
      label,
      name,
      styles = {},
      validations
    } = this.props

    const { showSelects, touched, date = dayjs() } = this.state

    const labelId = `label-${id || name}`
    const allowedProps = pick(this.props, [
      'disabled',
      'placeholder',
      'required'
    ])
    const months = [
      { label: 'January', value: 0 },
      { label: 'February', value: 1 },
      { label: 'March', value: 2 },
      { label: 'April', value: 3 },
      { label: 'May', value: 4 },
      { label: 'June', value: 5 },
      { label: 'July', value: 6 },
      { label: 'August', value: 7 },
      { label: 'September', value: 8 },
      { label: 'October', value: 9 },
      { label: 'November', value: 10 },
      { label: 'December', value: 11 }
    ]
    const daysInMonth = date.daysInMonth() || 31

    const mapValues = array =>
      array.map(value => ({ label: value, value: value }))

    return showSelects ? (
      <div className={`c11n-input-date ${classNames.root}`} id={id}>
        {label && (
          <Label
            id={labelId}
            required={required}
            styles={{
              root: styles.label,
              required: styles.required
            }}
          >
            {label}
          </Label>
        )}
        <div className={classNames.wrapper}>
          <InputSelect
            {...allowedProps}
            styles={styles.input}
            value={touched ? date.date().toString() : ''}
            onChange={this.updateDateFragment('date')}
            onBlur={this.updateDateFragment('date')}
            label='Day'
            name={`${name}-day`}
            aria-labelledby={labelId}
            options={[
              { label: 'Day', value: '', disabled: true },
              ...mapValues(range(1, daysInMonth + 1))
            ]}
          />
          <InputSelect
            {...allowedProps}
            styles={styles.input}
            value={touched ? date.month().toString() : ''}
            onChange={this.updateDateFragment('month')}
            onBlur={this.updateDateFragment('month')}
            label='Month'
            name={`${name}-month`}
            aria-labelledby={labelId}
            options={[{ label: 'Month', value: '', disabled: true }, ...months]}
          />
          <InputSelect
            {...allowedProps}
            styles={styles.input}
            value={touched ? date.year().toString() : ''}
            onChange={this.updateDateFragment('year')}
            onBlur={this.updateDateFragment('year')}
            label='Year'
            name={`${name}-year`}
            aria-labelledby={labelId}
            options={[
              { label: 'Year', value: '', disabled: true },
              ...mapValues(range(1900, parseInt(dayjs().year() + 1)))
            ]}
          />
        </div>
        {error && (
          <InputValidations
            styles={{ root: styles.error }}
            validations={validations}
          />
        )}
      </div>
    ) : (
      <InputField type='date' {...this.props} styles={styles.field} />
    )
  }
}

InputDate.defaultProps = {
  default: '1980-01-01'
}

export default withStyles(styles)(InputDate)
