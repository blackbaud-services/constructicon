### Examples

**Simple Responsive Grid**

Simple main content and sidebar style grid that snaps into single column on smaller screens

```
<Grid>
  <GridColumn xs={12} sm={8}>
    <Section background='shade'>Column 1</Section>
  </GridColumn>
  <GridColumn xs={12} sm={4}>
    <Section background='primary' foreground='light'>Column 2</Section>
  </GridColumn>
</Grid>
```

**Custom Styles**

Pass in custom style rules to be applied to the grid column
