# Examples

**Standard Use**

```
<Container width={16} spacing={1}>
  <Flippy
    front='Hover to see more...'
    back={(
      <h2>Peekaboo!</h2>
    )}
  />
</Container>
```

**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root` - Wrapper element
- `wrapper` - Common styles shared by front and back
- `front` - Content seen initially
- `back` - Content seen on hover

```
<Container width={16} spacing={1}>
  <Flippy
    styles={{
      wrapper: {
        backgroundColor: 'mediumseagreen'
      },
      front: {
        fontSize: '1rem'
      },
      back: {
        fontSize: '3rem'
      }
    }}
    front='This is the front...'
    back={(
      <h2>And this is the back!</h2>
    )}
  />
</Container>
```
