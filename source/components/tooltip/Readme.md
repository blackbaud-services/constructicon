The only prop, the child function, is called with three parameters

**bindTarget** - An object containing a ref assignment and event listeners for
dectecting hover events. Spread this argument onto the node that you want to be
the *hover target*

**TooltipPortal** - A component that renders its children in a portal when the
target from the previous parameter is being hovered. To Make sure the tooltip
stays open when hovering over the portal content, make sure it is rendered
inside the target node

**tooltipStyles** - A style object containing the top and left value of the
target node and some basic transforms, forward this to the root node of your
`TooltipPortal`

### Examples

**Standard Use**

```
const styles = {
  root: {
    borderRadius: '0.66em',
    border: '1px dashed #ccc',
    textAlign: 'center',
    padding: '2em',
    cursor: 'pointer',
    background: 'whitesmoke'
  },

  popup: {
    color: 'white',
    borderRadius: '0.4em',
    fontSize: '0.75em',
    padding: '0.4em 0.66em',
    background: 'slategrey'
  }
};

<Tooltip>
  {(bindTarget, TooltipPortal, tooltipStyles) => (
    <div {...bindTarget} style={styles.root}>
      <TooltipPortal>
        <div style={{
          ...tooltipStyles,
          ...styles.popup
        }}>
          I am a tooltip
        </div>
      </TooltipPortal>
      Hover over me!
    </div>
  )}
</Tooltip>
```
