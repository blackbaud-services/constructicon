import merge from "lodash/merge";

export default (
  { styles },
  { colors, measures, rhythm, scale, treatments }
) => {
  const defaultStyles = {
    root: {
      display: "flex",
      fontWeight: 700,
      fontSize: scale(-0.5),
      lineHeight: "1.5em",
      textAlign: "left",
      marginBottom: rhythm(0.25),
      ...treatments.label,

      "& a": {
        color: colors.primary,
        textDecoration: "underline",
      },
    },

    required: {
      display: "inline-block",
      color: colors.danger,
      cursor: "help",
    },
  };

  return merge(defaultStyles, styles);
};
