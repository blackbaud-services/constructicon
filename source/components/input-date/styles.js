import merge from "lodash/merge";

export default (
  { touched, invalid, readOnly, spacing = 0.5, styles },
  { colors, fonts, radiuses, rhythm, treatments }
) => {
  const isInvalid = touched && invalid;

  const baseStyles = {
    root: {
      display: "block",
      position: "relative",
      fontFamily: fonts.body,
      textAlign: "left",
      marginBottom: rhythm(1),
    },

    wrapper: {
      display: "flex",
      flexWrap: "nowrap",
      marginLeft: rhythm(-spacing),
    },

    input: {
      root: {
        flex: "auto",
        marginBottom: 0,
        marginLeft: rhythm(spacing),
      },
      field: {
        textAlign: "center",
      },
      label: {
        display: "none",
      },
    },

    field: {
      display: "block",
      width: "100%",
      textAlign: "left",
      backgroundColor: colors.light,
      color: readOnly ? colors.lightGrey : colors.dark,
      padding: rhythm([0.125, 0.333]),
      height: rhythm(1.666),
      border: `thin solid ${isInvalid ? colors.danger : colors.lightGrey}`,
      boxShadow: isInvalid ? `0 0 5px ${colors.danger}` : "none",
      borderRadius: rhythm(radiuses.small),
      appearance: "none",
      lineHeight: rhythm(1.35),
      ...treatments.input,

      "&:focus": {
        borderColor: isInvalid ? colors.danger : colors.secondary,
        boxShadow: `0 0 5px ${isInvalid ? colors.danger : colors.secondary}`,
      },
    },
  };

  return merge(baseStyles, styles);
};
