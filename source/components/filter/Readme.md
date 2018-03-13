### Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
<Filter onChange={(val) => alert(val)}/>
```

**Disable Debounce**

We can turn the debouncing off if required

```
<Filter onChange={(val) => alert(val)} debounce={false} />
```

**Colors**

Update the background and foreground colors

This is useful for when the form is on a different color background already

```
<Filter
  onChange={(val) => alert(val)}
  background='primary'
  foreground='light'
/>
```

**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root` - Form styles
- `icon` - Search icon
- `input` - The search field

```
<Filter
  onChange={(val) => alert(val)}
  styles={{
    icon: {
      color: '#999'
    }
  }}
/>
```
