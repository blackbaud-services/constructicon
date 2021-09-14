### Examples

**Standard Use**

```
const [image, setImage] = React.useState('');

<InputImage
  label='Upload an image'
  name='image'
  onChange={image => setImage(image)}
  onFileChange={console.log}
  value={image}
/>
```

```
<InputImage
  label='Upload an image (then rotate it)'
  name='image'
  onChange={console.log}
  orientationChange
  width={800}
  heigh={600}
/>
```
