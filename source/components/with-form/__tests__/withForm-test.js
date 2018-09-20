import withForm from '..'
import InputField from '../../input-field'
import * as validators from '../../../lib/validators'

describe('withForm', () => {
  const FormComponent = props => <form {...props} />
  const getForm = el => utils.getMountedElement(el, 'form')
  const getFormProps = el => getForm(el).prop('form')

  it('provides a form prop as an object with our form details', () => {
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

  it('sets the initial value of a field', () => {
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

  it('applies a validation to a field', () => {
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

  it('will set error only if the field is touched', () => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          validators: validators.required('Name is required')
        }
      }
    })(FormComponent)

    const wrapper = mount(<Form />)
    const form = wrapper.find('form')
    const initialProps = form.prop('form')
    expect(initialProps.fields.name.error).to.be.undefined

    initialProps.fields.name.onChange('')
    initialProps.fields.name.onBlur('')

    wrapper.update()
    const updatedForm = wrapper.find('form')
    const changedProps = updatedForm.prop('form')
    expect(changedProps.fields.name.error).to.be.true
  })

  it('applies multiple validations', () => {
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

  it('updates a fields value', () => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name'
        }
      }
    })(FormComponent)

    const wrapper = mount(<Form />)
    const form = wrapper.find('form')
    const initialProps = form.prop('form')

    initialProps.fields.name.onChange('John')

    wrapper.update()
    const updatedForm = wrapper.find('form')
    const changedProps = updatedForm.prop('form')
    expect(changedProps.fields.name.value).to.eql('John')
  })

  it('updates a fields value via updateValues func', () => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          initial: 'John'
        }
      }
    })(FormComponent)

    const wrapper = mount(<Form />)

    const form = wrapper.find('form')
    const initialProps = form.prop('form')
    expect(initialProps.fields.name.value).to.eql('John')

    initialProps.updateValues({ name: 'Jane' })

    wrapper.update()
    const updatedForm = wrapper.find('form')
    const changedProps = updatedForm.prop('form')
    expect(changedProps.fields.name.value).to.eql('Jane')
  })

  it('resets the form via resetForm', () => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          initial: 'Jane'
        }
      }
    })(FormComponent)

    const formEl = getForm(<Form />)
    const form = formEl.prop('form')
    form.fields.name.onChange('John')
    form.resetForm()
    const updatedForm = formEl.prop('form')
    expect(updatedForm.fields.name.value).to.eql('Jane')
  })

  it('will not submit if invalid', done => {
    const Form = withForm({
      fields: {
        name: {
          label: 'Name',
          validators: validators.required('Required field')
        }
      }
    })(FormComponent)

    const form = getFormProps(<Form />)
    form.submit().catch(fields => {
      expect(fields).to.eql({ name: 'Required field' })
      done()
    })
  })

  it('will submit if valid', done => {
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
    form.submit().then(values => {
      expect(values).to.eql({ name: 'John' })
      done()
    })
  })

  it('fires an onFormChange handler on update', () => {
    const Form = ({ form }) => (
      <form>
        <InputField {...form.fields.name} />
      </form>
    )

    const ChildForm = withForm(props => ({
      onFormChange: props.onChange,
      fields: {
        name: {
          label: 'Name',
          initial: 'John'
        }
      }
    }))(Form)

    const onChangeFunc = sinon.spy()
    const wrapper = mount(<ChildForm onChange={onChangeFunc} />)
    const input = wrapper.find('input')

    input.simulate('change', { target: { value: 'Dan' } })

    expect(onChangeFunc.callCount).to.eql(1)
    expect(onChangeFunc.firstCall.args[0].values.name).to.eql('Dan')
  })
})
