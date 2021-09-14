### Examples

**Standard Use**

```
const [video, setVideo] = React.useState('');

<InputVideo
  label='Enter a video URL'
  name='video'
  placeholder='e.g. https://www.youtube.com/watch?v=Eo-KmOd3i7s'
  onChange={val => setVideo(val)}
  value={video}
/>
```


**With initial value**

```
const [video, setVideo] = React.useState('https://vimeo.com/243244233');

<InputVideo
  label='Enter a video URL'
  name='video'
  onChange={val => setVideo(val)}
  onVideoChange={console.log}
  value={video}
/>
```
