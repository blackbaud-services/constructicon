### Examples

**Standard Use**

Used to contain site content within a centered and minimum width container

```
<Container>
  <Section>Header</Section>
  <Section>Body</Section>
  <Section>Footer</Section>
</Container>
```

**Width**

Alter the minimum width of the container

```
<Container width={10} styles={{ backgroundColor: '#eee' }}>
  <Section>Header</Section>
  <Section>Body</Section>
  <Section>Footer</Section>
</Container>
```

**Shadow**

Apply one of the theme's shadows to the container

```
<Container shadow='light'>
  <Section>Header</Section>
  <Section>Body</Section>
  <Section>Footer</Section>
</Container>
```

**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root`: Root content element
- `outer`: Wrapper element

```
<Container styles={{
  root: {
    backgroundColor: 'whitesmoke',
    maxWidth: '15rem',
    padding: '0.75rem',
    textAlign: 'center'
  },
  outer: {
    padding: '0.75rem',
    backgroundColor: 'grey'
  }
}}>
  <span>Hello!</span>
</Container>
```
