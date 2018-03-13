_Example components can be found in source/components/with-form/examples_

---

__withForm__ is a higher order component (HOC) that allows you to pass in your form configuration, and it will then inject a __form__ prop into your component.

You can then use this __form__ prop, and spread them across __InputField__ or other Constructicon form fields, and it will handle all the updating and validating of your form.

You can then call __form.submit()__ when you want to submit your form.

<br/>
# Form Configuration

You pass in your form configuration as an object to __withForm__, with all your fields passed in under the __fields__ key.

Each field can be passed in a number of properties:

**label** - the label for the field

**initial** - the initial value of the field (empty if not applicable)

**validators** - a function, or array of functions that will validate the field

**type, placeholder** - or any other attribute that you want spread onto the dom element

<br/>
## Validators

The validators you pass in are functions that take 2 args:

**value** - the current value of the field

**values** - the current values of all fields, useful if your validation is conditional

These functions should return a falsy value if valid, and an error message if invalid.

There are some predefined validators you can use in _constructicon/lib/validators_

<br/>

### Example Configuration

```javascript static
withForm({
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
})(MyFormComponent)
```

You can also specify an `onFormChange` listener in the configuration, which takes the form object as an argument

For example:

```javascript static
withForm({
  onFormChange: (form) => console.log(form.values, form.invalid, ...),
  fields: {
    // ...
  }
})
```

If you wish to pass this in as a `prop` to your wrapped component, you can supply a function to the `withForm` HOC, which takes a `props` argument:

```javascript static
withForm((props) => ({
  onFormChange: props.onChange,
  fields: {
    // ...
  }
}))
```

<br/>

# Form Props

__withForm__ will pass a __form__ prop into your component.

<br/>
__form.fields__

You can spread the individual fields across Constructicon form components. This will pass through all the needed props to that form component, such as onChange handlers.

```javascript static
<InputField {...form.fields.username} />
```

<br/>

__form.updateValues__

You can call form.updateValues() which can update the values of fields from outside user interaction.

Values can be updated in the format below:

```javascript static
componentWillReceiveProps (nextProps) {
  const { testValue } = nextProps
  if (testValue !=== this.props.testValue)
    this.props.form.updateValues({
      testValue: testValue
    })
  }
}
```

<br/>

__form.resetForm__

You can call form.resetForm() which will reset all of the form values and validations to their initial state.

```javascript static
handleCancel () {
  this.props.form.resetForm()
}
```

<br/>

__form.submit__

You can call form.submit() which will return a promise that will either:

Resolve to the field values if valid, or...

Reject with the invalid fields and there error messages.

```javascript static
handleSubmit (e) {
  e.preventDefault()
  this.props.form.submit()
    .then((values) => doSomethingGoodWithValues(values))
    .catch((errors) => doSomethingGoodWithErrors(errors))
}
```
