### Examples

**Standard Use**

```
import RichText from '../rich-text';

<div>
  <Accordion title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?'>
    <RichText>
      <p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
    </RichText>
  </Accordion>
  <Accordion title='Purus Lorem Nullam?'>
    <RichText>
      <p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
    </RichText>
  </Accordion>
  <Accordion title='Morbi leo risus, porta ac consectetur ac, vestibulum at eros, fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.?'>
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

**Default State**

Open the accordion by default

```
<Accordion title='Question here?' toggled>
  <p>Answer here...</p>
</Accordion>
```

**Color**

Set the active color of the accordion for the icon and borders

```
<Accordion title='Question here?' color='tertiary'>
  <p>Answer here...</p>
</Accordion>
```

**Font**

Set the font style for the title

```
<Accordion title='Question here?' font='body'>
  <p>Answer here...</p>
</Accordion>
```

**Custom Icons**

Set the open and close icon or text

```
import RichText from '../rich-text';

const opened = 'Close';
const closed = 'Open';

<Accordion title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?' opened={opened} closed={closed} gutter={2}>
  <RichText>
    <p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
  </RichText>
</Accordion>
```

**Remove Border**

Remove the border from the accordion

```
<Accordion title='Question here?' border={false}>
  <p>Answer here...</p>
</Accordion>
```

**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root` - Containing element
- `head` - Header container
- `toggle` - Header icon
- `title` - Header title text
- `body` - Content body

For example:

```
const styles = {
  head: {
    padding: '1.5em',
    border: '1px solid #eee',
    backgroundColor: '#f6f6f6'
  },
  body: {
    paddingBottom: '1.5em',
    border: '1px solid #eee',
    borderTop: 'none'
  }
};

<Accordion title='Question here?' border={false} styles={styles}>
  <p>Answer here...</p>
</Accordion>
```
