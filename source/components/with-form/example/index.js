import React from 'react'
import withForm from '..'
import Button from '../../button'
import InputField from '../../input-field'
import validators from '../../../lib/validators'

const Login = ({ form }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    form.submit()
      .then((values) => { console.log('do something') })
      .catch((errors) => { console.log('invalid fields') })
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField {...form.fields.email} />
      <InputField {...form.fields.password} />
      <Button type='submit'>Submit</Button>
    </form>
  )
}

const form = {
  fields: {
    email: {
      label: 'Email',
      validators: [
        validators.required('Email is a required field'),
        validators.email('Should be a valid email')
      ]
    },
    password: {
      label: 'Password',
      type: 'password',
      validators: validators.required('Password is a required field')
    }
  }
}

export default withForm(form)(Login)
