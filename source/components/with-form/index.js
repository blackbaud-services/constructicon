import React, { Component } from 'react'
import filter from 'lodash/filter'
import isEmpty from 'lodash/isEmpty'
import merge from 'lodash/merge'
import mapValues from 'lodash/mapValues'
import { isBoolean } from '../../lib/form'

const withForm = config => ComponentToWrap =>
  class extends Component {
    constructor (props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.updateValues = this.updateValues.bind(this)
      this.resetForm = this.resetForm.bind(this)
      this.submitForm = this.submitForm.bind(this)

      const options = this.initOptions(config)
      const fields = this.initFields(options.fields)
      this.state = {
        fields: this.validateFields(fields),
        options
      }
    }

    initOptions (config) {
      const defaults = { fields: {} }
      const supplied =
        typeof config === 'function' ? config(this.props) : config
      return merge(defaults, supplied)
    }

    initialValue (field) {
      return isBoolean(field.type) ? false : ''
    }

    initFields (fields) {
      return mapValues(fields, (field, key) => ({
        ...field,
        name: key,
        value: field.initial || this.initialValue(field),
        onChange: this.handleChange(key),
        onBlur: this.handleChange(key, true)
      }))
    }

    validateFields (fields) {
      return mapValues(fields, field => {
        const validations = this.validateField(
          field.validators,
          field.value,
          this.getValues(fields)
        )

        return {
          ...field,
          validations,
          invalid: !isEmpty(validations),
          error: field.touched && !isEmpty(validations)
        }
      })
    }

    validateField (validators, value, values) {
      switch (typeof validators) {
        case 'function':
          return validators(value, values)
        case 'object':
          const validations = validators.map(validator =>
            this.validateField(validator, value, values)
          )
          return validations.filter(v => v)
        default:
          return validators
      }
    }

    checkIfValid (fields) {
      return filter(fields, filter => filter.invalid).length === 0
    }

    touchFields (fields) {
      return mapValues(fields, field =>
        merge({}, field, {
          touched: true,
          error: !isEmpty(field.validations)
        })
      )
    }

    handleChange (key, touched) {
      return value => {
        const field = this.state.fields[key]
        const updatedFields = {
          ...this.state.fields,
          [key]: {
            ...field,
            value,
            touched: touched || field.touched,
            dirty: value !== field.initial
          }
        }

        const fields = this.validateFields(updatedFields)

        if (this.state.options.onFormChange) {
          this.state.options.onFormChange(this.getForm(fields))
        }

        this.setState({ fields })
      }
    }

    getValues (fields) {
      return mapValues(fields, 'value')
    }

    getValidations (fields) {
      return mapValues(fields, 'validations')
    }

    updateValues (keys) {
      const newValues = mapValues(keys, (value, key) => ({
        ...this.state.fields[key],
        value: value
      }))

      const updatedFields = {
        ...this.state.fields,
        ...newValues
      }

      this.setState({
        fields: this.validateFields(updatedFields)
      })
    }

    resetForm () {
      const fields = this.initFields(this.state.options.fields)
      this.setState({
        fields: this.validateFields(fields)
      })
    }

    submitForm () {
      const fields = this.touchFields(this.state.fields)
      this.setState({ fields })
      return new Promise(
        (resolve, reject) =>
          this.checkIfValid(fields)
            ? resolve(this.getValues(fields))
            : reject(this.getValidations(fields))
      )
    }

    getForm (fields) {
      return {
        fields,
        values: this.getValues(fields),
        invalid: !this.checkIfValid(fields),
        validations: this.getValidations(fields),
        updateValues: this.updateValues,
        resetForm: this.resetForm,
        submit: this.submitForm
      }
    }

    render () {
      return (
        <ComponentToWrap
          {...this.props}
          form={this.getForm(this.state.fields)}
        />
      )
    }
  }

export default withForm
