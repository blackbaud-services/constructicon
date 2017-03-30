import withForm from '..'
import * as validators from '../../../lib/validators'

describe('withForm', () => {
  const FormComponent = (props) => <form {...props} />
  const getForm = (el) => utils.getMountedElement(el, 'form')
  const getFormProps = (el) => getForm(el).prop('form')

  it ('provides a form prop as an object with our form details', () => {
    const Form = withForm({
      fields: {
        name: { label: 'Name' },
        password: { label: 'Password' }
      }
    })(FormComponent)

    const form = getFormProps(<Form />)
    expect(form.fields.name.label).to.eql('Name')
    expect(form.fields.password.label).to.eql('Password')
  })

  it ('sets the initial value of a field', () => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          initial: 'John'
        }
      }
    })(FormComponent)

    const form = getFormProps(<Form />)
    expect(form.fields.name.value).to.eql('John')
  })

  it ('applies a validation to a field', () => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          validators: validators.required('Name is required')
        }
      }
    })(FormComponent)

    const form = getFormProps(<Form />)
    expect(form.fields.name.invalid).to.be.true
  })

  it ('will set error only if the field is touched', () => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          validators: validators.required('Name is required')
        }
      }
    })(FormComponent)

    const form = getForm(<Form />)
    const initialProps = form.prop('form')
    expect(initialProps.fields.name.error).to.be.undefined

    initialProps.fields.name.onChange('')
    const changedProps = form.prop('form')
    expect(changedProps.fields.name.error).to.be.true
  })

  it ('applies multiple validations', () => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          validators: [
            validators.required('Name is required'),
            validators.greaterThan(5, 'Must be more than 5')
          ]
        }
      }
    })(FormComponent)

    const form = getForm(<Form />)
    const initialProps = form.prop('form')
    expect(initialProps.fields.name.invalid).to.be.true
  })

  it ('updates a fields value', () => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name'
        }
      }
    })(FormComponent)

    const form = getForm(<Form />)
    const initialProps = form.prop('form')
    initialProps.fields.name.onChange('John')
    const changedProps = form.prop('form')
    expect(changedProps.fields.name.value).to.eql('John')
  })

  it ('will not submit if invalid', (done) => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          validators: validators.required('Required field')
        }
      }
    })(FormComponent)

    const form = getFormProps(<Form />)
    form.submit().catch((fields) => {
      expect(fields).to.eql({ name: 'Required field' })
      done()
    })
  })

  it ('will submit if valid', (done) => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          initial: 'John',
          validators: validators.required('Required field')
        }
      }
    })(FormComponent)

    const form = getFormProps(<Form />)
    form.submit().then((values) => {
      expect(values).to.eql({ name: 'John' })
      done()
    })
  })
})
