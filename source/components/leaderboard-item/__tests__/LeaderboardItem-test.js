import LeaderboardItem from '../../leaderboard-item'

describe('LeaderboardItem', () => {
  it('should render a simple leaderboard item', () => {
    const wrapper = mount(
      <LeaderboardItem
        href='http://google.com'
        title='Name'
        subtitle='Charity'
        image='http://placehold.it/250x250'
        amount='$2,500'
      />
    )
    const item = wrapper.find('LeaderboardItem')
    const image = wrapper.find('img')
    expect(item.length).to.eql(1)
    expect(image.length).to.eql(1)
    expect(image.prop('src')).to.eql('http://placehold.it/250x250')
  })

  it('should use the supplied LinkTag', () => {
    const MyLink = ({ children }) => (
      <div>
        <p>I'm special</p>
        {children}
      </div>
    )

    const wrapper = mount(
      <LeaderboardItem linkTag={MyLink} title='Name' amount='$2,500' />
    )

    const customLink = wrapper.find('MyLink')
    expect(customLink.length).to.eql(1)
  })

  it('should use the supplied link target', () => {
    const wrapper = mount(
      <LeaderboardItem href='http://google.com' title='Name' target='_top' />
    )

    const item = wrapper.find('a')
    expect(item.prop('target')).to.eql('_top')
  })

  it('applies linkProps to the link', () => {
    const wrapper = mount(
      <LeaderboardItem linkProps={{ foo: 'bar' }} title='Name' />
    )

    const item = wrapper.find('a')
    expect(item.prop('foo')).to.eql('bar')
  })
})
