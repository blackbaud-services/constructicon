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
  value
}) => {
  const inputId = id || name
  const labelId = `label-${inputId}`
  const [selectedItem, setSelectedItem] = useState(value)
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
  const id = value.replaceAll(' ', '_')

  return (
    <div
      className={classes}
      onClick={() => !disabled && onClick()}
      id={`option_${id}`}
    >
      <img
        src={image}
        alt={`option ${value}`}
        id={`image_${id}`}
        className={`${classNames.image} ${classNames.desktopImage}`}
      />
      {mobileImage && (
        <img
          src={mobileImage}
          alt={`option ${value}`}
          id={`mobile_image_${id}`}
          className={`${classNames.image} ${classNames.mobileImage}`}
        />
      )}
      <div
        className={classNames.optionLabelContainer}
        id={`labelContainer_${id}`}
      >
        <label
          className={classNames.optionLabel}
          id={`label_${id}`}
          htmlFor={`input_${id}`}
        >
          {value}
        </label>
      </div>
      <div className={classNames.radioContainer} id={`inputContainer_${id}`}>
        <input
          id={`input_${id}`}
          type='radio'
          checked={selected}
          onBlur={onBlur}
          className={classNames.radio}
          disabled={disabled}
          readOnly={disabled}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(ImageSelect)
