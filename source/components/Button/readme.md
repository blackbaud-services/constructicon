Tag e.g. anchor, button, a React Router Link etc.

```
<ButtonGroup>
  <Button tag='a' href='http://google.com'>Click Me</Button>
  <Button tag='button' onClick={() => console.log('clicked')}>Click Me</Button>
  <Button tag='span' onClick={() => console.log('clicked')}>Click Me</Button>
</ButtonGroup>
```

Background Color

```
<ButtonGroup>
  <Button>Click Me</Button>
  <Button background='secondary'>Click Me</Button>
  <Button background='tertiary'>Click Me</Button>
  <Button background='dark'>Click Me</Button>
</ButtonGroup>
```

Foreground Color

```
<ButtonGroup>
  <Button>Click Me</Button>
  <Button foreground='dark'>Click Me</Button>
</ButtonGroup>
```

Font Size

```
<ButtonGroup>
  <Button size={-1}>Click Me</Button>
  <Button size={0}>Click Me</Button>
  <Button size={1}>Click Me</Button>
  <Button size={2}>Click Me</Button>
</ButtonGroup>
```

Spacing

```
<ButtonGroup>
  <Button spacing={{ x: 1, y: 1 }}>Click Me</Button>
  <Button spacing={{ l: 1, r: 1, b: 1, t: 1 }}>Click Me</Button>
  <Button spacing={1}>Click Me</Button>
</ButtonGroup>
```

Border

```
<ButtonGroup>
  <Button borderWidth={3}>Click Me</Button>
  <Button borderWidth={1}>Click Me</Button>
  <Button borderColor='shade'>Click Me</Button>
  <Button borderColor='tint'>Click Me</Button>
</ButtonGroup>
```

Border Radius

```
<ButtonGroup>
  <Button radius='none'>Click Me</Button>
  <Button radius='small'>Click Me</Button>
  <Button radius='medium'>Click Me</Button>
  <Button radius='large'>Click Me</Button>
</ButtonGroup>
```

Fonts

```
<ButtonGroup>
  <Button>Click Me</Button>
  <Button font='head'>Click Me</Button>
  <Button font='body'>Click Me</Button>
</ButtonGroup>
```

Hover Effects

```
<ButtonGroup>
  <Button>Click Me</Button>
  <Button effect='shade'>Click Me</Button>
  <Button effect='tint'>Click Me</Button>
  <Button effect='grow'>Click Me</Button>
  <Button effect='shrink'>Click Me</Button>
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
    <Button background='primary'>Click Me</Button>
    <Button background='secondary'>Click Me</Button>
    <Button background='tertiary'>Click Me</Button>
  </ButtonGroup>
</TraitsProvider>
```
