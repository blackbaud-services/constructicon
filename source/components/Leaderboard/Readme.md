# Examples

**Standard Use**

```
const leader = {
  href: 'http://google.com',
  image: 'http://placehold.it/250x250',
  title: 'Leader Name',
  subtitle: 'Charity Name',
  amount: '$1,500'
};

const leaders = [ leader, leader, leader, leader, leader, leader ];

<Leaderboard leaders={leaders} />
```

**Colors**

Set the background and foreground color of the leaderboard

```
const leader = {
  href: 'http://google.com',
  image: 'http://placehold.it/250x250',
  title: 'Leader Name',
  subtitle: 'Charity Name',
  amount: '$1,500'
};

const leaders = [ leader, leader, leader, leader, leader, leader ];

<Leaderboard leaders={leaders} background='primary' foreground='light' />
```

**Columns**

Set the leaderboard to break into columns at certain breakpoints

```
const leader = {
  href: 'http://google.com',
  image: 'http://placehold.it/250x250',
  title: 'Leader Name',
  subtitle: 'Charity Name',
  amount: '$1,500'
};

const leaders = [ leader, leader, leader, leader, leader, leader ];

<Leaderboard leaders={leaders} columns={{ md: 2 }} />
```

**Custom Styles**

Set custom styles

**root**

applied to the wrapper

**leaders**

applied to the leaders listing

```
const leader = {
  href: 'http://google.com',
  image: 'http://placehold.it/250x250',
  title: 'Leader Name',
  subtitle: 'Charity Name',
  amount: '$1,500'
};

const leaders = [ leader, leader, leader, leader, leader, leader ];

const styles = {
  leaders: {
    backgroundColor: '#f6f6f6'
  }
};

<Leaderboard leaders={leaders} styles={styles} />
```

**Loading**

Set the loading prop while your results are loading

```
<Leaderboard loading />
```

**Error**

Set the error prop if there was an error loading the leaders

```
<Leaderboard error />
```


**Empty**

If the leaders array is empty, an empty message will be shown

```
<Leaderboard leaders={[]} />
```
