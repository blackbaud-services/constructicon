import React, { useState } from 'react'
import Label from '../label'
import withStyles from '../with-styles'
import InputValidations from '../input-validations'
import styles from './styles'

const ImageSelect = ({
  label,
  id,
  name,
  required,
  options,
  classNames,
  disabled,
  onChange,
  error,
  validations,
  ...props
}) => {
  const inputId = id || name
  const labelId = `label-${inputId}`
  const [selectedItem, setSelectedItem] = useState()
  const handleChange = value => {
    setSelectedItem(value)
    onChange && onChange(value)
  }

  return (
    <div className={classNames.root}>
      {label && (
        <Label id={labelId} inputId={inputId} required={required}>
          {label}
        </Label>
      )}
      <div id={inputId}>
        {options.map(option => (
          <ImageSelectItem
            key={option.value}
            classNames={classNames}
            onClick={() => handleChange(option.value)}
            selected={selectedItem === option.value}
            disabled={disabled}
            {...option}
          />
        ))}
      </div>
      {error && (
        <InputValidations
          styles={{ root: styles.error }}
          validations={validations}
        />
      )}
    </div>
  )
}

const ImageSelectItem = ({
  classNames,
  image,
  mobileImage,
  value,
  selected,
  onClick,
  onBlur,
  disabled,
  ...props
}) => {
  const classes = `${classNames.option} ${selected &&
    classNames.optionSelected} ${disabled && classNames.disabled}`

  return (
    <div className={classes} onClick={() => !disabled && onClick()}>
      <img
        src={image}
        alt={`option ${value}`}
        className={`${classNames.image} ${classNames.desktopImage}`}
      />
      {mobileImage && (
        <img
          src={mobileImage}
          alt={`option ${value}`}
          className={`${classNames.image} ${classNames.mobileImage}`}
        />
      )}
      <div className={classNames.optionLabelContainer}>
        <p className={classNames.optionLabel}>{value}</p>
      </div>
      <div className={classNames.radioContainer}>
        <input
          type='radio'
          checked={selected}
          onBlur={onBlur}
          className={classNames.radio}
          disabled={disabled}
          readonly={disabled}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(ImageSelect)
