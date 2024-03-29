### Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
const [value, setValue] = React.useState('');

<div>
  <InputSelect
    label='Gender'
    name='gender'
    placeholder='Please Select Gender'
    value={value}
    onChange={val => setValue(val)}
    options={[
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ]}
  />
</div>
```

**Grouped Options**

Includes support for `<optgroup>`

```
const [value, setValue] = React.useState('');

<div>
  <InputSelect
    label='Event'
    name='event'
    placeholder='Please Select Event'
    value={value}
    onChange={val => setValue(val)}
    groupOptions
    options={[
      { value: 'all', label: 'All Events' },
      { value: 'event1', label: 'Great Event', group: 'Active' },
      { value: 'event2', label: 'Another Event', group: 'Active' },
      { value: 'event3', label: 'Previous Event', group: 'Inactive' }
    ]}
  />
</div>
```

**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root` - Containing element
- `wrapper` - Wrapper around hidden select element and UI placeholder
- `input` - Select field (UI hidden)
- `field` - Field UI element (placeholder)
- `label` - Label element
- `required` - Required label (if present)
- `icon` - dropdown icon
- `errors` - Error messages container
- `error` - Error message styles

**Treatments**

The following treatments in your project's traits will be applied:

- `inputRoot` -> `root`
- `input` -> `field`
