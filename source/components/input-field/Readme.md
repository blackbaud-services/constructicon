# Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```javascript
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
