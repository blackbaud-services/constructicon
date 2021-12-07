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
  camera
  label='Include an overlay image and allow camera input'
  name='image'
  onChange={image => setImage(image)}
  value={image}
  width={600}
  height={600}
  overlay='https://images.justgiving.com/image/e4a95af6-bec2-4888-b04a-3f2bad3f0dc9.png'
/>
```
