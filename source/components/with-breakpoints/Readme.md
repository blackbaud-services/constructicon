A very simple higher order component that detects the current breakpoint based on document width.

__withBreakpoints__ will inject a useful prop into your component:

**breakpoints** an object containing a boolean value for whether the current document width is the same or larger than each of the available screen breakpoints


### Example

```javascript static
const MyComponent = ({
  breakpoints
}) => (
  <div>
    {breakpoints.md ? 'I am a tablet or larger' : 'I am smaller than a tablet.'}
  </div>
)

export default withBreakpoints(MyComponent)
```
