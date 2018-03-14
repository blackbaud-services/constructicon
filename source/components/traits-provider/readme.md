### Example

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

```javascript static
const fonts = {
  head: 'Roboto',
  body: 'Roboto'
};

const traits = {
  fonts,
  colors: {
    primary: '#42AA4C',
    secondary: '#096010',
    tertiary: '#585858'
  },
  treatments: {
    head: {
      fontFamily: fonts.head,
      fontWeight: 700
    },
    body: {
      fontFamily: fonts.body
    },
    button: {
      fontFamily: fonts.head,
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  }
};

<TraitsProvider traits={traits}>
  <ButtonGroup>
    <Button>Click Me</Button>
    <Button background='secondary'>Click Me</Button>
  </ButtonGroup>
</TraitsProvider>
```
