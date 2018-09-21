import withStyles from '..'

describe('withStyles', () => {
  const Component = props => <div />

  const styles = (props, traits) => ({
    title: {
      fontSize: '3rem'
    }
  })

  it('provides a classNames prop as an object with generated class names', () => {
    const StyledComponent = withStyles(styles)(Component)
    const props = mount(<StyledComponent />)
      .find('Component')
      .props()
    expect(props.classNames.title).to.exist
  })

  it('provides a styles prop as an object with related style objects', () => {
    const StyledComponent = withStyles(styles)(Component)
    const props = mount(<StyledComponent />)
      .find('Component')
      .props()
    expect(props.styles.title.fontSize).to.eql('3rem')
  })
})
