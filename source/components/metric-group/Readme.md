### Example Use

**Standard Use**

```
import Metric from '../metric';

<MetricGroup>
  <Metric
    label='Target'
    amount='$500,000'
    icon='target'
  />
  <Metric
    label='Funds Raised'
    amount='$250,000'
    icon='dollar'
  />
  <Metric
    label='Supporters'
    amount='174'
    icon='star'
  />
</MetricGroup>
```

**Colors**

Set the background and/or foreground colors

```
import Metric from '../metric';

<MetricGroup background='primary' foreground='light'>
  <Metric
    label='Target'
    amount='$500,000'
    icon='target'
  />
  <Metric
    label='Funds Raised'
    amount='$250,000'
    icon='dollar'
  />
  <Metric
    label='Supporters'
    amount='174'
    icon='star'
  />
</MetricGroup>
```

**Custom Styles**

Pass in custom style rules to be applied to the group

```
import Metric from '../metric';

<MetricGroup styles={{ backgroundColor: '#ddd' }}>
  <Metric
    label='Target'
    amount='$500,000'
    icon='target'
  />
</MetricGroup>
```
