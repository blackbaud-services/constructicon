__withStyles__ is a higher order component (HOC) that allows you to style your components.

It works by taking your styles as an argument, and then passing in a couple of useful props to your component.

### Usage

The styles function you pass as an argument to __withStyles__, will receive two arguments.

**props** - the props for the styled component so you can apply conditional styles

**traits** - your style traits, which include any themed traits that have been setup by `TraitsProvider`

Your styles function should return an object, where each key within the object will be processed as it's own set of styles.

__withStyles__ will inject 2 props into our component that we can use

**classNames** - these are class strings that you can attach directly to HTML elements e.g. if your styles function returns an object with keys `title` and `body`, your classNames prop will also be an object with keys `title` and `body`

**styles** - these are the style defintions that can be forwarded onto other React components to be processed, such as for customising styles of Constructicon components. As above, the styles prop will have the same keys as the object returned from your styles function.

### Example

```javascript static
const MyComponent = ({
  classNames,
  copy,
  styles,
  title
}) => (
  <div>
    <Heading styles={styles.heading}>{title}</Heading>
    <div className={classNames.body}>{copy}</div>
  </div>
)

const styles = (props, traits) => ({
  heading: {
    fontSize: traits.scale(4)
  },
  body: {
    padding: traits.rhythm(1)
  }
})

export default withStyles(styles)(MyComponent)
```
