### Examples

**Standard Use**

```
<SearchForm onChange={(val) => alert(val)} />
```

**Expanded**

```
<SearchForm expanded onChange={(val) => alert(val)} />
```

**With Search Results**

```
var supporters = [1, 2, 3];

<SearchForm onChange={(v) => alert('Search for ' + v)}>
  <SearchResults loading={!supporters.length}>
    {supporters.map((sup, i) => (
      <SearchResult
        key={i}
        image='http://placehold.it/250x250'
        title='Supporter Name'
        subtitle='Charity Name'>
        <Button>Support</Button>
      </SearchResult>
    ))}
  </SearchResults>
</SearchForm>
```

**Custom styles**

Apply a custom styles object to alter the look. Available elements are:

- `root`
- `form`
- `field`
- `input`
- `label`
- `results`
