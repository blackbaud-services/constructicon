import React, { Component } from 'react'
import moment from 'moment'
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
    this.updateDay = this.updateDay.bind(this)
    this.updateMonth = this.updateMonth.bind(this)
    this.updateYear = this.updateYear.bind(this)
    this.updateDate = this.updateDate.bind(this)

    this.state = {
      touched: !!props.value,
      showSelects: props.showSelects,
      value: props.value,
      date: props.value ? moment(props.value) : moment()
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

  updateDay (day) {
    const date = this.state.date.date(day)
    this.updateDate(date)
  }

  updateMonth (month) {
    const date = this.state.date.month(month)
    this.updateDate(date)
  }

  updateYear (year) {
    const date = this.state.date.year(year)
    this.updateDate(date)
  }

  updateDate (moment) {
    this.setState({ date: moment, touched: true })
    this.props.onChange(moment.format('YYYY-MM-DD'))
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

    const { showSelects, touched, date = moment() } = this.state

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
            onChange={this.updateDay}
            onBlur={this.updateDay}
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
            onChange={this.updateMonth}
            onBlur={this.updateMonth}
            label='Month'
            name={`${name}-month`}
            aria-labelledby={labelId}
            options={[{ label: 'Month', value: '', disabled: true }, ...months]}
          />
          <InputSelect
            {...allowedProps}
            styles={styles.input}
            value={touched ? date.year().toString() : ''}
            onChange={this.updateYear}
            onBlur={this.updateYear}
            label='Year'
            name={`${name}-year`}
            aria-labelledby={labelId}
            options={[
              { label: 'Year', value: '', disabled: true },
              ...mapValues(range(1900, parseInt(moment().year() + 1)))
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
      <InputField type='date' {...this.props} />
    )
  }
}

export default withStyles(styles)(InputDate)
