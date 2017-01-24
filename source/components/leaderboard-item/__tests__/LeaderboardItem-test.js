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
})
