__Pagination__ is a component with a render-prop to control the pagination of an array

It splits the provided array (`toPaginate`) into chunks of `max` length and invokes the child render-prop with a set of pagination controls.


### Usage

The child function supplied to __Pagination__, will receive one argument, an object with the following shape.

**allPages** - `array` - the entire chunked array of arrays

**currentPage** - `array` - the currently active 'page' array

**numberOfPages** - `number` - the length of the allPages array

**pageIndex** - `number` - index of `currentPage` in `allPages` (starting at 0)

**pageNumber** - `number` - human readable number of `currentPage` in `allPages` (starting at 1)

**pageOf** - `string` - human readable string of your current page "page 1 of 2"

**isPaginated** - `boolean` - true if `allPages` contains more than one item

**canNext** - `boolean` - true if you are not on the last page

**canPrev** - `boolean` - true if you are not on the first page

**next** - `function` - change `currentPage` to the next page in the list

**prev** - `function` - change `currentPage` to the previous page in the list


# Example

```
// create some fake leaderboard data
const leaders = new Array(15).fill({
  href: 'http://google.com',
  image: 'http://placehold.it/250x250',
  name: 'Leader Name',
  charity: 'Charity Name',
  amount: '$1,500'
}).map((item, index)  => ({
  ...item,
  rank: index + 1
}));

// Pagination Usage
<Pagination
  toPaginate={leaders}
  max={5}
>
  {paginated => (
    <div>

      <Leaderboard>
        {paginated.currentPage.map((leader, i) => (
          <LeaderboardItem
            key={i}
            rank={leader.rank}
            title={leader.name}
            subtitle={leader.charity}
            image={leader.image}
            amount={leader.amount}
          />
        ))}
      </Leaderboard>

      <br />

      <ButtonGroup styles={styles}>
        <Button
          disabled={!paginated.canPrev}
          onClick={paginated.prev}>
          Prev
        </Button>

        <span>{paginated.pageOf}</span>

        <Button
          disabled={!paginated.canNext}
          onClick={paginated.next}>
          Next
        </Button>
      </ButtonGroup>

    </div>
  )}
</Pagination>

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
}
```
