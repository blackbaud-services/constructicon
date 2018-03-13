### Examples

**Loading**

Set the loading prop while your results are loading

```
<SearchResults loading />
```

**Error**

Set the error prop if there was an error loading the leaders

```
<SearchResults error />
```


**Empty**

If the no leaderboard items are passed in, an empty message will be shown

```
<SearchResults />
```

**Results**

Filled with SearchResults

```
<SearchResults>
  <SearchResult
    cta='Support'
    image='http://placehold.it/100x100'
    title='Support Name'
    subtitle='Supporter Charity'>
    <Button tag='a' href='http://google.com'>Support</Button>
  </SearchResult>
  <SearchResult
    cta='Support'
    image='http://placehold.it/100x100'
    title='Support Name'
    subtitle='Supporter Charity'>
    <Button tag='a' href='http://google.com'>Support</Button>
  </SearchResult>
</SearchResults>
```

**Custom styles**

Apply a custom styles object to alter the look. Available elements are:

- `root`
- `state`
- `loading`
