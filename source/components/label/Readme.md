### Examples

**Standard Use**

```
<Label>My Field</Label>
```

**Required**

```
<Label required>My Field</Label>
```

**Custom styles**

Apply a custom styles object to alter the look. Available elements are:

- `root` - Label element
- `required` - Required label (if present)

```
var styles = {
  root: {
    color: 'green'
  }
};

<Label styles={styles}>Green Label</Label>
```

**Treatments**

The following treatments in your project's traits will be applied:

- `label` -> `root`
