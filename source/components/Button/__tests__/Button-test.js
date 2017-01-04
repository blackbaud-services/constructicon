import Button from '..'

describe('Button', () => {
  it('should render a button', () => {
    const button = shallow(<Button>Click Me</Button>)
    expect(button.text()).to.eql('Click Me')
  })

  it('should allow us to set the background color', () => {
    const button = shallow(<Button background='tertiary'>Click Me</Button>)
  })
})
