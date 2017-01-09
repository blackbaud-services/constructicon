# Example

**Standard Use**

Pass in a traits object to set the various available traits, including:

**colors**

primary, secondary, tertiary, dark, light, shade, tint

**fonts**

head, body

**treatments**

head, body, button

**radiuses**

small, medium, large

**shadows**

light

**effects**

shade, tint, grow, shrink

```
<TraitsProvider traits={{
  colors: {
    primary: '#DD9955',
    secondary: '#33AACC'
  },
  treatments: {
    button: {
      fontFamily: '"Quicksand"',
      fontWeight: 400
    }
  }
}}>
  <ButtonGroup>
    <Button>Click Me</Button>
    <Button background='secondary'>Click Me</Button>
  </ButtonGroup>
</TraitsProvider>
```
