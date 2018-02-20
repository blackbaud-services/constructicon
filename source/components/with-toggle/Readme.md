A very simple higher order component that handles basic toggle functionality.

__withToggle__ will inject a few useful props into your component:

**toggled** the current state of the toggle

**onToggleOn** turn the toggle on

**onToggleOff** turn the toggle off

**onToggle** toggle the value to on/off

### Example

```javascript static
const MyComponent = ({
  toggled,
  onToggleOn,
  onToggleOff
}) => (
  <div>
    <Button onClick={onToggleOn}>Open</Button>
    <Modal onRequestClose={onToggleOff} isOpen={toggled}>
      I will be shown when the button is clicked
    </Modal>
  </div>
)

export default withToggle(MyComponent)
```
