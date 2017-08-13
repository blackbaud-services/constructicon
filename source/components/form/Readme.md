# Examples

**Standard Use**

Pass an onSubmit callback to be notified of changes

```
initialState = {
  email: '',
  password: '',
  source: '',
  terms: false,
  loading: false,
  submitted: false
};

handleSubmit = (e) => {
  e.preventDefault()

  setState({ loading: true })

  setTimeout(() => {
    setState({
      loading: false,
      submitted: true
    })
  }, 1500)
};

<div>
  <Form
    isDisabled={!state.email || !state.password || !state.terms}
    isLoading={state.loading}
    submit={state.submitted ? 'Thanks!' : 'Sign Up'}
    onSubmit={(e) => handleSubmit(e)}
    icon={state.submitted || { name: 'chevron', size: 0.75 }}>

    <InputField
      type='email'
      label='Email'
      name='email'
      value={state.email}
      onChange={(v) => setState({ email: v })}
      required
    />

    <InputField
      type='password'
      label='Password'
      name='password'
      value={state.password}
      onChange={(v) => setState({ password: v })}
      required
    />

    <InputSelect
      label='Where did you hear about us?'
      name='source'
      value={state.source}
      options={[
        {
          label: 'Select an option...',
          value: '',
          disabled: true
        },
        {
          label: 'The Internet',
          value: 'web'
        },
        {
          label: 'From a Friend',
          value: 'friend'
        },
        {
          label: 'Other',
          value: 'other'
        }
      ]}
      onChange={(v) => setState({ source: v })}
      required
    />

    <InputField
      type='checkbox'
      label='I agree to the terms'
      name='terms'
      value={state.terms}
      onChange={(v) => setState({ terms: v })}
      required
    />
  </Form>

  {state.submitted && (
    <p style={{ padding: '1rem', background: 'whitesmoke' }}>
      Email: {state.email || 'N/A'} <br />
      Password: {Array.from(Array(state.password.length)).map((x, i) => { return '*' }).join('')} <br />
      Source: {state.source || 'N/A'}
    </p>
  )}
</div>
```
