import React, { Component } from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import range from 'lodash/range'
import pick from 'lodash/pick'
import withStyles from '../with-styles'
import styles from './styles'

import InputField from '../input-field'
import InputSelect from '../input-select'
import InputValidations from '../input-validations'
import Label from '../label'
dayjs.extend(customParseFormat)

class InputDate extends Component {
  constructor (props) {
    super(props)
    this.updateDateFragment = this.updateDateFragment.bind(this)
    this.updateDate = this.updateDate.bind(this)

    const date = dayjs(props.value || props.default)

    this.state = {
      showSelects: props.showSelects,
      value: props.value,
      date,
      fragments: {
        date: props.value ? date.date().toString() : '',
        month: props.value ? date.month().toString() : '',
        year: props.value ? date.year().toString() : ''
      }
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
      if (!value) return

      const fragments = {
        ...this.state.fragments,
        [type]: value
      }

      const { date, month, year } = fragments

      this.setState({ fragments })

      if (date && month && year) {
        return this.updateDate(
          this.state.date
            .date(date)
            .month(month)
            .year(year)
        )
      }
    }
  }

  updateDate (date) {
    this.setState({ date })
    this.props.onChange(dayjs(date).format('YYYY-MM-DD'))
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

    const { showSelects, date = dayjs() } = this.state

    const labelId = `label-${id || name}`
    const allowedProps = pick(this.props, [
      'disabled',
      'invalid',
      'placeholder',
      'required',
      'touched'
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
            value={this.state.fragments.date}
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
            value={this.state.fragments.month}
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
            value={this.state.fragments.year}
            onChange={this.updateDateFragment('year')}
            onBlur={this.updateDateFragment('year')}
            label='Year'
            name={`${name}-year`}
            aria-labelledby={labelId}
            options={[
              { label: 'Year', value: '', disabled: true },
              ...mapValues(range(1900, parseInt(dayjs().year() + 2)).reverse())
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
