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

**Content Editable**

```
initialState = { val: '<b>Some</b> <i>text</i> <u>here</u>.' };

<div>
  <InputField
    type='contenteditable'
    label='Rich text'
    name='contenteditable'
    value={state.val}
    onChange={val => setState({ val })}
    onBlur={val => setState({ val })}
  />

  <Section tag='pre' background='paleGrey' spacing={0.5} style={{ fontFamily: 'monospace'}} children={state.val} />
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

**Password field**

```
initialState = { password: '' };

<InputField
  type='password'
  name='fakePass'
  label='Password'
  value={state.password}
  onChange={password => setState({ password })}
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

**Limited characters**

```
initialState = { tweet: '' };

<InputField
  type='textarea'
  label='Tweet'
  name='tweet'
  value={state.tweet}
  onChange={(v) => setState({ tweet: v })}
  maxLength={240}
/>

```


**Treatments**

The following treatments in your project's traits will be applied:

- `inputRoot` -> `root`
- `input` -> `field`
