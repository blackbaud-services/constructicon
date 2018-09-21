import Grid from '..'
import GridColumn from '../../grid-column'
import { css } from '../../../lib/css'
import { mediaQuery, rhythm } from '../../../lib/traits'

describe('Grid', () => {
  it('should render a grid container', () => {
    const wrapper = mount(<Grid>Content here</Grid>)
    const container = wrapper.find('Grid')
    const styles = container.prop('styles')
    expect(container.text()).to.eql('Content here')
    expect(styles.root.display).to.eql('flex')
  })

  it('should render grid columns within the grid', () => {
    const wrapper = mount(
      <Grid>
        <GridColumn>Column 1</GridColumn>
        <GridColumn>Column 2</GridColumn>
        <GridColumn>Column 3</GridColumn>
      </Grid>
    )
    const columns = wrapper.find('GridColumn')
    expect(columns.length).to.eql(3)
  })

  it('should allow us to set the spacing of the grid', () => {
    const wrapper = mount(
      <Grid spacing={{ x: 2, y: 4 }}>
        <GridColumn>Column 1</GridColumn>
        <GridColumn>Column 2</GridColumn>
      </Grid>
    )
    const container = wrapper.find('Grid')
    const styles = container.prop('styles')
    expect(styles.root.marginLeft).to.eql(rhythm(-2))
    expect(styles.root.marginRight).to.eql(rhythm(-2))
    expect(styles.root.marginTop).to.eql(rhythm(-4))
    expect(styles.root.marginBottom).to.eql(rhythm(-4))
  })

  it('should allow us to set breakpoints on a column', () => {
    const wrapper = mount(
      <GridColumn xs={12} sm={6} md={4}>
        Column
      </GridColumn>
    )
    const column = wrapper.find('GridColumn')
    const styles = column.prop('styles')
    expect(styles.root.flex).to.eql('1 0 100%')
    expect(styles.root[mediaQuery('sm')].flex).to.eql('1 0 50%')
    expect(styles.root[mediaQuery('md')].flex.split(' ')[0]).to.eql('1')
    expect(styles.root[mediaQuery('md')].flex.split(' ')[1]).to.eql('0')
    expect(styles.root[mediaQuery('md')].flex.split(' ')[2]).to.contain(
      '33.3333'
    )
  })
})
