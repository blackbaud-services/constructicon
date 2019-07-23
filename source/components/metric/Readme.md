### Examples

**Standard Use**

```
<MetricGroup>
  <Metric
    label='Target'
    amount='$500,000'
    icon='target'
  />
</MetricGroup>
```

**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root` - Container element
- `icon` - Icon
- `label` - Label / Heading
- `amount` - Metric value

**Treatments**

The following treatments in your project's traits will be applied:

- `metric` -> `root`
- `metricLabel` -> `image`
- `metricAmount` -> `amount`
- `metricIcon` -> `icon`
