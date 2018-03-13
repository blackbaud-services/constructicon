### Examples

**Standard Use**

Used to apply consistent padding to sections of content

```
<Section>
  Content here
</Section>
```

**Spacing**

Adjust the spacing by passing in a spacing object or a number

```
<Section spacing={{ x: 3, y: 1 }}>
  Content here
</Section>
```

**Colors**

Set the background and/or foreground colors of the section to one of theme's colors

```
<Section background='primary' foreground='light'>
  Content here
</Section>
```

**Borders**

Set the border width, border color and/or border radius

```
<Section borderWidth={3} radius='medium'>
  Content here
</Section>
```

**Custom styles**

Pass in custom style rules to be applied to the section

```
<Section styles={{ backgroundColor: 'rebeccapurple', color: 'white' }}>
  Content here
</Section>
```
