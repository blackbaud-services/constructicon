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

```
const [image, setImage] = React.useState('');

<InputImage
  label='Include an overlay image'
  name='image'
  onChange={image => setImage(image)}
  value={image}
  width={600}
  height={600}
  overlay='https://images.justgiving.com/image/e6bbb7bb-2747-48d3-aab5-7e66837246c4.png'
/>
```
