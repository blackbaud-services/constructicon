### Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
const [firstName, setFirstName] = React.useState('');
const [lastName, setLastName] = React.useState('');

<div>
  <InputField
    label='First Name'
    name='firstName'
    value={firstName}
    onChange={val => setFirstName(val)}
    required
  />

  <InputField
    label='Last Name'
    name='lastName'
    value={lastName}
    onChange={val => setLastName(val)}
    required
  />
</div>
```

**Content Editable**

```
import Section from '../section';

const [value, setValue] = React.useState('<b>Some</b> <i>text</i> <u>here</u>.');

<div>
  <InputField
    type='contenteditable'
    label='Rich text'
    name='contenteditable'
    value={value}
    onChange={val => setValue(val)}
    onBlur={val => setValue(val)}
  />

  <Section
    tag='pre'
    background='paleGrey'
    spacing={0.5}
    style={{ fontFamily: 'monospace'}}
  >
    {value}
  </Section>
</div>
```

**Status indicator**

```
const [value, setValue] = React.useState('');
const [status, setStatus] = React.useState('');
const [validations, setValidations] = React.useState([]);

handleChange = (search) => {
  setValue(search)
  setStatus('fetching')
  setValidations([])

  if (search) {
    setTimeout(() => setStatus('fetched'), 1000)
  } else {
    setTimeout(() => {
      setStatus('failed')
      setValidations(['Not found'])
    }, 1000)
  }
}

<InputField
  type='search'
  name='status'
  placeholder='Start typing to search...'
  value={value}
  status={status}
  onChange={handleChange}
  error={!!validations.length}
  validations={validations}
/>
```

**Password field**

```
const [password, setPassword] = React.useState('');

<InputField
  type='password'
  name='fakePass'
  label='Password'
  value={password}
  onChange={val => setPassword(val)}
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
const [value, setValue] = React.useState('');

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
  value={value}
  onChange={(e) => console.log(e)}
  required
/>
```

**Limited characters**

```
const [value, setValue] = React.useState('');

<InputField
  type='textarea'
  label='Tweet'
  name='tweet'
  value={value}
  onChange={(v) => setValue(v)}
  maxLength={240}
/>

```


**Treatments**

The following treatments in your project's traits will be applied:

- `inputRoot` -> `root`
- `input` -> `field`
