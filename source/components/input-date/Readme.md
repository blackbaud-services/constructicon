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
    name='birthday'
    value={state.date}
    onChange={(v) => setState({ date: v })}
    showSelects
  />
  <div style={styles}>
    {state.date || 'No date selected'}
  </div>
</div>
```
