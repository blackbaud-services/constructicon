# Examples

**Standard Use**

```
const data = [
  { name: 'joe' },
  { name: 'john' },
  { name: 'jane' },
  { name: 'janet' }
];

initialState = {
  results: []
};

const Result = (props) => (
  <div style={{ padding: '1rem', background: props.isSelected && 'red' }}>
    {props.name}
  </div>
);

<InputSearch
  onSearch={(v) => setState({ results: data.filter((r) => r.name.indexOf(v) !== -1) })}
  onSelect={(r) => window.alert(r.name)}
  ResultComponent={Result}
  results={state.results}
/>
```
