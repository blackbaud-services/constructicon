A hook to return the dimensions of a ref passed in the hook. Can pass liveMeasure prop as false to prevent from recalculting on resize. Will return the following props of the element:
*width, height, top, left, x, y, right, bottom*

### Example
Setting padding based on height of another div

```javascript static
  const [ref, { height }] = useDimensions()
  return (
    <div>
      <div style={{ paddingBottom: height }} />
      <div className={classNames.wrapper} ref={ref} />
    </div>
```
