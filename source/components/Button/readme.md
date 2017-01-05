Background Color

```
<ButtonGroup>
  <Button>Primary Button</Button>
  <Button background='secondary'>Secondary Button</Button>
  <Button background='tertiary'>Tertiary Button</Button>
  <Button background='dark'>Dark Button</Button>
</ButtonGroup>
```

Foreground Color

```
<ButtonGroup>
  <Button>Light Text</Button>
  <Button foreground='dark'>Dark Text</Button>
</ButtonGroup>
```

Font Size

```
<ButtonGroup>
  <Button size={-1}>Font Size (-1)</Button>
  <Button size={0}>Font Size (0)</Button>
  <Button size={1}>Font Size (1)</Button>
  <Button size={2}>Font Size (2)</Button>
</ButtonGroup>
```

Padding

```
<ButtonGroup>
  <Button padding={{ x: 0.25, y: 0.5 }}>Small Padding</Button>
  <Button padding={{ x: 1, y: 2 }}>Large Padding</Button>
</ButtonGroup>
```

Border

```
<ButtonGroup>
  <Button borderWidth={3}>Thick</Button>
  <Button borderWidth={1}>Thin</Button>
  <Button borderColor='shade'>Shade</Button>
  <Button borderColor='tint'>Tint</Button>
</ButtonGroup>
```

Border Radius

```
<ButtonGroup>
  <Button radius='none'>Flat Borders</Button>
  <Button radius='small'>Small Borders</Button>
  <Button radius='medium'>Medium Borders</Button>
  <Button radius='large'>Large Borders</Button>
</ButtonGroup>
```

Fonts

```
<ButtonGroup>
  <Button>Button Font</Button>
  <Button font='head'>Heading Font</Button>
  <Button font='body'>Body Font</Button>
</ButtonGroup>
```

Hover Effects

```
<ButtonGroup>
  <Button>No Effect</Button>
  <Button effect='shade'>Shade</Button>
  <Button effect='tint'>Tint</Button>
  <Button effect='grow'>Grow</Button>
  <Button effect='shrink'>Shrink</Button>
</ButtonGroup>
```

Custom Styles

```
<Button styles={{
  fontSize: '10px',
  backgroundColor: '#777'
}}>Custom Styles</Button>
```

With Traits Provider

```
<TraitsProvider colors={{
  primary: '#079',
  secondary: '#606',
  tertiary: '#793'
}}>
  <ButtonGroup>
    <Button background='primary'>My New Theme</Button>
    <Button background='secondary'>My New Theme</Button>
    <Button background='tertiary'>My New Theme</Button>
  </ButtonGroup>
</TraitsProvider>
```
