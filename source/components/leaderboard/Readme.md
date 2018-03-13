### Examples

**Standard Use**

```
const leader = {
  href: 'http://google.com',
  image: 'http://placehold.it/250x250',
  name: 'Leader Name',
  charity: 'Charity Name',
  amount: '$1,500'
};

const leaders = [ leader, leader, leader, leader, leader, leader ];

<Leaderboard>
  {leaders.map((leader, i) => (
    <LeaderboardItem
      key={i}
      href={leader.href}
      image={leader.image}
      title={leader.name}
      subtitle={leader.charity}
      amount={leader.amount}
    />
  ))}
</Leaderboard>
```

**Colors**

Set the background and foreground color of the leaderboard

```
const leader = {
  href: 'http://google.com',
  image: 'http://placehold.it/250x250',
  name: 'Leader Name',
  charity: 'Charity name that is actually rather long',
  amount: '$1,500'
};

const leaders = [ leader, leader, leader, leader, leader, leader ];

<Leaderboard background='primary' foreground='light'>
  {leaders.map((leader, i) => (
    <LeaderboardItem
      key={i}
      href={leader.href}
      image={leader.image}
      title={leader.name}
      subtitle={leader.charity}
      amount={leader.amount}
    />
  ))}
</Leaderboard>
```

**Columns**

Set the leaderboard to break into columns at certain breakpoints

```
const leader = {
  href: 'http://google.com',
  image: 'http://placehold.it/250x250',
  name: 'Leader Name',
  charity: 'Charity Name',
  amount: '$1,500'
};

const leaders = [ leader, leader, leader, leader, leader, leader ];

<Leaderboard columns={{ md: 2 }}>
  {leaders.map((leader, i) => (
    <LeaderboardItem
      key={i}
      href={leader.href}
      image={leader.image}
      title={leader.name}
      subtitle={leader.charity}
      amount={leader.amount}
    />
  ))}
</Leaderboard>
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

If the no leaderboard items are passed in, an empty message will be shown

```
<Leaderboard />
```

**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root` - Containing element
- `leaders` - Applied to the leaders listing

```
const leader = {
  href: 'http://google.com',
  image: 'http://placehold.it/250x250',
  name: 'Leader Name',
  charity: 'Charity Name',
  amount: '$1,500'
};

const leaders = [ leader, leader, leader, leader, leader, leader ];

<Leaderboard styles={{
  leaders: {
    backgroundColor: '#f6f6f6'
  }
}}>
  {leaders.map((leader, i) => (
    <LeaderboardItem
      key={i}
      href={leader.href}
      image={leader.image}
      title={leader.name}
      subtitle={leader.charity}
      amount={leader.amount}
    />
  ))}
</Leaderboard>
```
