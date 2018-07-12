__NumberToWords__ is a wrapper component around the constructicon `numberToWords` function

It converts a number between 0 and 1,000,000,000 to words and forwards the props to the wrapping element

# Example

```
<div>
  <NumberToWords number={0} />

  <NumberToWords
    number={1337}
    tag='div'
  />

  <NumberToWords
    number={42}
    tag='a'
    href="#numbertowords"
    style={{
      textDecoration: 'underline'
    }}
  />

  <br />

  <NumberToWords
    tag={Heading}
    number={4000004}
  />
</div>
```
