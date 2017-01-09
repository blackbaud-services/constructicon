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
  }
}}>
  <ButtonGroup>
    <Button>Click Me</Button>
    <Button background='secondary'>Click Me</Button>
  </ButtonGroup>
</TraitsProvider>
```

# Example Site

```
<TraitsProvider traits={{
  colors: {
    primary: '#42AA4C',
    secondary: '#096010'
  }
}}>
  <Container shadow='light'>
    <Section spacing={{ x: 1, y: 0.5 }} styles={{ borderBottom: '2px solid #eee' }}>
      <Grid align='center'>
        <GridColumn md={6}>
          Example Site
        </GridColumn>
        <GridColumn md={6} mdAlign='right'>
          <ButtonGroup>
            <Button size={-1} radius='large'>Donate</Button>
            <Button size={-1} radius='large' background='tertiary'>Register</Button>
          </ButtonGroup>
        </GridColumn>
      </Grid>
    </Section>
    <Grid align='stretch'>
      <GridColumn md={8}>
        <Section>
          <RichText>
            <h1>Example Site</h1>
            <p>Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h2>Example Site</h2>
            <p>Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3>Example Site</h3>
            <p>Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </RichText>
          <Button radius='large'>Donate Now</Button>
        </Section>
      </GridColumn>
      <GridColumn md={4} background='shade'>
        <Section>
          <RichText>
            <h1>Sidebar</h1>
            <p>Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </RichText>
          <Button radius='large'>Donate Now</Button>
        </Section>
      </GridColumn>
    </Grid>
    <Section styles={{ backgroundColor: '#f6f6f6', borderTop: '2px solid #ddd' }}>
      <Grid spacing={1}>
        <GridColumn md={4}>
          <RichText>
            <h4>Links</h4>
            <ul>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
            </ul>
          </RichText>
        </GridColumn>
        <GridColumn md={4}>
          <RichText>
            <h4>Links</h4>
            <ul>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
            </ul>
          </RichText>
        </GridColumn>
        <GridColumn md={4}>
          <RichText>
            <h4>Links</h4>
            <ul>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
            </ul>
          </RichText>
        </GridColumn>
      </Grid>
    </Section>
  </Container>
</TraitsProvider>
```
