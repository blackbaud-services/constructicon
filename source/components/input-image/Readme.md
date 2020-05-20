### Examples

**Standard Use**

```
initialState = { image: '' };

<InputImage
  label='Upload an image'
  name='image'
  onChange={image => setState({ image })}
  onFileChange={console.log}
  value={state.image}
/>
```
