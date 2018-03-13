### Examples

**Standard Use**

Provides a standard format for chunks of markup

```
<RichText>
  <h1>Heading 1</h1>
  <p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.</p>
  <h2>Heading 2</h2>
  <p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.</p>
  <h3>Heading 3</h3>
  <p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.</p>
  <blockquote>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</blockquote>
  <h4>Heading 4</h4>
  <p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.</p>
  <ul>
    <li>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.</li>
    <li>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.</li>
    <li>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.</li>
  </ul>
  <h5>Heading 5</h5>
  <p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.</p>
  <ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ol>
  <h6>Heading 6</h6>
  <p>Donec id elit non mi <strong>porta gravida at eget metus</strong>. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed <em>diam eget risus varius blandit sit amet non magna</em>. Etiam porta sem malesuada magna mollis euismod.</p>
</RichText>
```

**Font Size**

```
<RichText size={-1}>
  <h2>Heading 2</h2>
  <p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.</p>
</RichText>
```

**Line Clamp**

```
<RichText lineClamp={2}>
  <p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.</p>
</RichText>
```

**Custom Styles**

You can pass through custom styles to be applied

```
<RichText styles={{
  '& h1': {
    color: '#42AA4C'
  }
}}>
  <h1>Heading 1</h1>
  <p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.</p>
</RichText>
```
