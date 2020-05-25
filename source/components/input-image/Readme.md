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

```
<InputImage
  label='Upload an image'
  name='image'
  onChange={console.log}
  orientationChange
  width={800}
  heigh={600}
/>
```
