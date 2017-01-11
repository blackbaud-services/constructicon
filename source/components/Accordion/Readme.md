# Examples

**Standard Use**

```
<div>
  <Accordion title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?'>
    <RichText>
      <p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
    </RichText>
  </Accordion>
  <Accordion title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?'>
    <RichText>
      <p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
    </RichText>
  </Accordion>
  <Accordion title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?'>
    <RichText>
      <p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
    </RichText>
  </Accordion>
  <Accordion title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?'>
    <RichText>
      <p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
    </RichText>
  </Accordion>
</div>
```

**Color**
```
<Accordion title='Question here?' color='tertiary'>
  <p>Answer here...</p>
</Accordion>
```

**Default Open/Close**
```
<Accordion title='Question here?' toggled>
  <p>Answer here...</p>
</Accordion>
```

**Custom Icons**

```
const opened = 'Close';
const closed = 'Open';

<Accordion title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' opened={opened} closed={closed} gutter={2}>
  <RichText>
    <p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
  </RichText>
</Accordion>
```

**Remove Border**

```
<Accordion title='Question here?' border={false}>
  <p>Answer here...</p>
</Accordion>
```
