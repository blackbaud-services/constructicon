### Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
const [date, setDate] = React.useState('');

<div>
  <InputDate
    label='Date of Birth'
    name='birthday'
    value={date}
    onChange={val => setDate(val)}
    required
  />
  <div style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'whitesmoke' }}>
    {date || 'No date selected'}
  </div>
</div>
```

**Always show selects**

```
const [date, setDate] = React.useState('');

<div>
  <InputDate
    label='Date of Birth'
    name='dob'
    value={date}
    onChange={val => setDate(val)}
    showSelects
  />
  <div style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'whitesmoke' }}>
    {date || 'No date selected'}
  </div>
</div>
```

**Predefined date**

```
<InputDate
  label='Select a date'
  name='date'
  value='1970-01-01'
  onChange={(v) => console.log(v)}
  showSelects
/>
```
