# Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
initialState = { gender: '' };

<div>
  <InputSelect
    label='Gender'
    name='gender'
    placeholder='Please Select Gender'
    value={state.gender}
    onChange={(v) => setState({ gender: v })}
    options={[
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ]}
  />
</div>
```
