## Examples

**Standard Use**

A half filled progress bar.

```
<ProgressBar
  alt='<%= progress %>% raised'
  progress={50}
/>
```

**Using traits**

Uses custom colors and radiuses as specified by traits

```
<ProgressBar
  alt='<%= progress %>% raised'
  progress={50}
  background='secondary'
  fill='dark'
  radius='none'
/>
```

**Custom styles**

Using a gradient for the progress fill

```
<ProgressBar
  alt='<%= progress %>% raised'
  progress={50}
  styles={{
    fill: {
      background: 'linear-gradient(to right, orange , yellow, green, cyan, blue, violet)'
    }
  }}
/>
```
