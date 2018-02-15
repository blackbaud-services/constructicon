import React from 'react'
import Icon from '../../icon'

const SelectedValue = ({
  classNames,
  label,
  onClick
}) => (
  <div className={classNames.selected}>
    <span className={classNames.selectedLabel}>{label}</span>
    <span className={classNames.selectedClose} onClick={onClick}>
      <Icon name='close' size={0.5} />
    </span>
  </div>
)

export default SelectedValue
