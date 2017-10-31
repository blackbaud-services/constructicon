# Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
initialState = { date: '' };

<div>
  <InputDate
    label='Date of Birth'
    name='birthday'
    value={state.date}
    onChange={(v) => setState({ date: v })}
    required
  />
</div>
```

**Always show selects**

```
initialState = { date: '' };

<div>
  <InputDate
    label='Date of Birth'
    name='birthday'
    value={state.date}
    onChange={(v) => setState({ date: v })}
    showSelects
  />
</div>
```
