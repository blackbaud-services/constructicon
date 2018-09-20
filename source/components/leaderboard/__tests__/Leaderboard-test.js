import Leaderboard from '..'
import LeaderboardItem from '../../leaderboard-item'

describe('Leaderboard', () => {
  const defaultItem = (
    <LeaderboardItem
      href='http://google.com'
      title='Name'
      subtitle='Charity'
      image='http://placehold.it/250x250'
      amount='$2,500'
    />
  )

  it('should render a simple leaderboard', () => {
    const wrapper = mount(<Leaderboard>{defaultItem}</Leaderboard>)
    const item = wrapper.find('LeaderboardItem')
    expect(item.length).to.eql(1)
  })

  it('should show a loading icon if items loading', () => {
    const wrapper = mount(<Leaderboard loading>{defaultItem}</Leaderboard>)
    const item = wrapper.find('LeaderboardItem')
    const icon = wrapper.find('Icon')
    expect(item.length).to.eql(0)
    expect(icon.length).to.eql(1)
  })

  it('should show an error message if error specified', () => {
    const wrapper = mount(<Leaderboard error>{defaultItem}</Leaderboard>)
    const item = wrapper.find('LeaderboardItem')
    const icon = wrapper.find('Icon')
    expect(item.length).to.eql(0)
    expect(icon.length).to.eql(1)
  })
})
