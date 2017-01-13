# Examples

**Standard Use**

Pass an onChange callback to be notified of changes

```
<Filter onChange={(val) => alert(val)}/>
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

**root** - form styles

**icon** - search icon

**input** - the search field

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
