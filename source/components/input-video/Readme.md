### Examples

**Standard Use**

```
initialState = { video: '' };

<InputVideo
  label='Enter a video URL'
  name='video'
  placeholder='e.g. https://www.youtube.com/watch?v=Eo-KmOd3i7s'
  onChange={video => setState({ video })}
  value={state.video}
/>
```


**With initial value**

```
initialState = { video: 'https://vimeo.com/243244233' };

<InputVideo
  label='Enter a video URL'
  name='video'
  onChange={video => setState({ video })}
  onVideoChange={console.log}
  value={state.video}
/>
```
