Traits Example

```
// Need to fix formatting, would usually just pass through like {...traits} or individually as colors={} fonts={} etc.

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

Set Defaults

```
<TraitsProvider
  traits={{
    colors: {
      primary: '#DD9955',
      secondary: '#33AACC'
    }
  }}
  defaults={{
    background: 'secondary',
    radius: 'large',
    effect: 'shrink'
  }}>
  <ButtonGroup>
    <Button>Click Me</Button>
  </ButtonGroup>
</TraitsProvider>
```
