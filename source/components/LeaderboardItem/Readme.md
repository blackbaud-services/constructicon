# Examples

**Standard Use**

```
<Leaderboard>
  <LeaderboardItem
    href='http://google.com'
    title='Name Here'
    subtitle='Charity Name'
    image='http://placehold.it/250x250'
    amount='2,500km'
  />
</Leaderboard>
```

**Custom Styles**

Apply custom styles to the leaderboard item

**root** - the list item

**link** - the anchor tag

**image** - the avatar

**info** - the title and subtitle container

**title** - the main name or title

**subtitle** - the subtitle or charity

**amount** - the amount

```
const styles = {
  image: {
    height: '5em',
    width: '5em'
  }
};

<Leaderboard>
  <LeaderboardItem
    href='http://google.com'
    title='Name Here'
    subtitle='Charity Name'
    image='http://placehold.it/250x250'
    amount='2,500km'
    styles={styles}
  />
</Leaderboard>
```
