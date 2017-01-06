import Grid from '..'
import GridColumn from '../../GridColumn'
import { css } from '../../../lib/css'
import { mediaQuery, rhythm } from '../../../lib/traits'

describe('Grid', () => {
  it('should render a grid container', () => {
    const wrapper = mount(<Grid>Content here</Grid>)
    const container = wrapper.find('div')
    const rule = utils.findRule(css.rules, container.props().className)
    expect(container.text()).to.eql('Content here')
    expect(rule.css).to.contain(`display:flex`)
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
      <Grid padding={{ x: 2, y: 4 }}>
        <GridColumn>Column 1</GridColumn>
        <GridColumn>Column 2</GridColumn>
      </Grid>
    )
    const container = wrapper.find('Grid')
    const rule = utils.findRule(css.rules, container.prop('classNames').root)
    expect(rule.css).to.contain(`margin:${rhythm(-4)} ${rhythm(-2)}`)
  })

  it('should allow us to set breakpoints on a column', () => {
    const wrapper = mount(<GridColumn xs={12} sm={6} md={4}>Column</GridColumn>)
    const column = wrapper.find('GridColumn')
    const rule = utils.findRule(css.rules, column.prop('classNames').root)
    const ruleSm = utils.findRule(css.rules, `${column.prop('classNames').root}${mediaQuery('sm')}`)
    const ruleMd = utils.findRule(css.rules, `${column.prop('classNames').root}${mediaQuery('md')}`)
    expect(rule.css).to.contain('flex:1 0 100%')
    expect(ruleSm.css).to.contain('flex:1 0 50%')
    expect(ruleMd.css).to.contain('flex:1 0 33')
  })
})
