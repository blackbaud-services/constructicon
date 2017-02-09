# Examples

**Results**

You can pass through a result set to display.

```
<Search
  results={[
    {
      title: 'Cat',
      subtitle: 'Feline',
      image: 'http://placehold.it/100x100',
      url: 'http://www.example.com'
    }, {
      title: 'Dog',
      subtitle: 'Canine',
      image: 'http://placehold.it/100x100',
      url: 'http://www.example.com'
    }
  ]}
  onChange={() => {}}
/>
```

**Empty data states**

Different `status` values can be set to provide feedback on the data query.

```
<Search status='loading' onChange={() => {}} />
```

```
<Search status='noResult' onChange={() => {}} />
```

```
<Search status='error' onChange={() => {}} />
```

**Modal search**

By passing a value to `modalTrigger`, a button will be displayed which allows toggling a Search modal.

```
<Search onChange={() => {}} modalTrigger='Search' />
```
