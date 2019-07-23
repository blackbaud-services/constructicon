### Examples

**Standard Use**

```
<Leaderboard>
  <LeaderboardItem
    href='http://google.com'
    title='Name Here'
    subtitle='Charity Name'
    image='http://placehold.it/250x250'
    amount='2,500km'
    rank={1}
  />
</Leaderboard>
```

**Custom Link Component**

```
<Leaderboard>
  <LeaderboardItem
    href='http://google.com'
    linkTag='div'
    title='Name Here'
    subtitle='Charity Name'
    image='http://placehold.it/250x250'
    amount='2,500km'
  />
</Leaderboard>
```

**Custom Styles**

Apply a custom styles object to alter the look. Available elements are:

- `root` - the list item
- `link` - the anchor tag
- `image` - the avatar
- `info` - the title and subtitle container
- `title` - the main name or title
- `subtitle` - the subtitle or charity
- `amount` - the amount

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

**Treatments**

The following treatments in your project's traits will be applied:

- `leaderboardItem` -> `root`
- `leaderboardItemImage` -> `image`
- `leaderboardItemTitle` -> `title`
- `leaderboardItemSubtitle` -> `subtitle`
- `leaderboardItemAmount` -> `amount`
