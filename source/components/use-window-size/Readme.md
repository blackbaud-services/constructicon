A simple hook to return the dimensions of window size by width and height. Can be used if need to account for screen resizing.

### Example

```javascript static
const windowSize = useWindowSize()
<div>
  window width is {windowSize.width}
</div>
<div>
  window height is {windowSize.height}
</div>
```
