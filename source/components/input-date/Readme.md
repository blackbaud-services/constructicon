### Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
initialState = { date: '' };
styles = { padding: '1rem', textAlign: 'center', backgroundColor: 'whitesmoke' };

<div>
  <InputDate
    label='Date of Birth'
    name='birthday'
    value={state.date}
    onChange={(v) => setState({ date: v })}
    required
  />
  <div style={styles}>
    {state.date || 'No date selected'}
  </div>
</div>
```

**Always show selects**

```
initialState = { date: '' };
styles = { padding: '1rem', textAlign: 'center', backgroundColor: 'whitesmoke' };

<div>
  <InputDate
    label='Date of Birth'
    name='dob'
    value={state.date}
    onChange={(v) => setState({ date: v })}
    showSelects
  />
  <div style={styles}>
    {state.date || 'No date selected'}
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
