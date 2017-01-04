Traits Example

```
// Need to fix formatting, would usually just pass through like {...traits} or individually as colors={} fonts={} etc.

<TraitsProvider {
  ...{
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
  }
}>
  <ButtonGroup>
    <Button>Example Button</Button>
    <Button background='secondary'>Example Button</Button>
  </ButtonGroup>
</TraitsProvider>
```
