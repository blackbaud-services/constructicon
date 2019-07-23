### Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
initialState = { fn: '', ln: '' };

<div>
  <InputField
    label='First Name'
    name='firstName'
    value={state.fn}
    onChange={(v) => setState({ fn: v })}
    required
  />

  <InputField
    label='Last Name'
    name='lastName'
    value={state.ln}
    onChange={(v) => setState({ ln: v })}
    required
  />
</div>
```


**Status indicator**

```
initialState = { search: '', validations: [] };

handleChange = (search) => {
  setState({ search, status: 'fetching', validations: [] })

  if (search) {
    setTimeout(() => setState({ status: 'fetched' }), 1000)
  } else {
    setTimeout(() => setState({ status: 'failed', validations: ['Not found'] }), 1000)
  }
}

<InputField
  type='search'
  name='status'
  placeholder='Start typing to search...'
  value={state.search}
  status={state.status}
  onChange={handleChange}
  error={!!state.validations.length}
  validations={state.validations}
/>
```


**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root` - Containing element
- `field` - Input element
- `label` - Label element
- `required` - Required label (if present)
- `errors` - Error messages container
- `error` - Error message styles
- `status` - Status indicator styles

For example:

```
initialState = { test: 'This is a value' };

const styles = {
  label: {
    color: 'purple'
  },
  field: {
    color: 'seagreen'
  },
  required: {
    color: 'orange'
  }
};

<InputField
  label='Test'
  name='test'
  styles={styles}
  value={state.test}
  onChange={(e) => console.log(e)}
  required
/>
```

**Treatments**

The following treatments in your project's traits will be applied:

- `inputRoot` -> `root`
- `input` -> `field`
