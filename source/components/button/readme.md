### Examples

**Tag**

Specify the tag or component e.g. a, button, Link etc.

```
<ButtonGroup>
  <Button tag='a' href='http://google.com'>Click Me</Button>
  <Button tag='button' onClick={() => console.log('clicked')}>Click Me</Button>
  <Button tag='span' onClick={() => console.log('clicked')}>Click Me</Button>
</ButtonGroup>
```

**Colors**

Change the background color to one of the theme's colors

```
<ButtonGroup>
  <Button>Click Me</Button>
  <Button background='secondary'>Click Me</Button>
  <Button background='tertiary'>Click Me</Button>
  <Button background='dark'>Click Me</Button>
</ButtonGroup>
```

Change the foreground color to one of the theme's colors

```
<ButtonGroup>
  <Button>Click Me</Button>
  <Button foreground='dark'>Click Me</Button>
</ButtonGroup>
```

**Size**

Alter the font size, using a factor to be passed into the `scale` function

```
<ButtonGroup>
  <Button size={-1}>Click Me</Button>
  <Button size={0}>Click Me</Button>
  <Button size={1}>Click Me</Button>
  <Button size={2}>Click Me</Button>
</ButtonGroup>
```

**Spacing**

Change the padding of the button by passing in a spacing object or number

```
<ButtonGroup>
  <Button spacing={{ x: 1, y: 1 }}>Click Me</Button>
  <Button spacing={{ l: 1, r: 1, b: 1, t: 1 }}>Click Me</Button>
  <Button spacing={1}>Click Me</Button>
</ButtonGroup>
```

**Border**

Set the border width (px) and/or color to one of the theme's colors

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

**Fonts**

Specify a specific font treatment

```
<ButtonGroup>
  <Button>Click Me</Button>
  <Button font='head'>Click Me</Button>
  <Button font='body'>Click Me</Button>
</ButtonGroup>
```
**Hover Effects**

Set the hover effect of the button

```
<ButtonGroup>
  <Button>Click Me</Button>
  <Button effect='shade'>Click Me</Button>
  <Button effect='tint'>Click Me</Button>
  <Button effect='grow'>Click Me</Button>
  <Button effect='shrink'>Click Me</Button>
</ButtonGroup>
```

**Custom Styles**

Pass in custom style rules to be applied to the button

```
<Button styles={{
  fontSize: '10px',
  backgroundColor: '#777'
}}>Custom Styles</Button>
```

**Treatments**

The following treatments in your project's traits will be applied:

- `button`
