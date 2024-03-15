import merge from "lodash/merge";

export default (
  { toggled, expanded, styles },
  { colors, mediaQuery, radiuses, rhythm, scale, transitions, justifyContent }
) => {
  const open = expanded || toggled;

  const defaultStyles = {
    root: {
      position: "relative",
    },

    form: {
      maxWidth: rhythm(32),
      padding: rhythm(0.5),
      margin: "0 auto",

      [mediaQuery("sm")]: {
        display: "flex",
        alignItems: open ? "flex-end" : "center",
        flexPack: "center",
        ...justifyContent("center"),
      },
    },

    field: {
      position: "relative",
      marginRight: rhythm(1),
      flex: 1,
      transition: transitions.easeOut,
    },

    input: {
      paddingTop: rhythm(0.5),
      paddingBottom: rhythm(0.5),
      fontSize: scale(2),
      opacity: 0,
      border: `thin solid ${colors.lightGrey}`,
      borderRadius: rhythm(radiuses.small),
      transition: transitions.easeOut,
      ...(open && {
        width: "100%",
        padding: rhythm(0.5),
        opacity: 1,
      }),
    },

    label: {
      display: "block",
      transform: `translateY(${rhythm(1)})`,
      fontSize: scale(2),
      whiteSpace: "nowrap",
      transition: transitions.easeOut,
      ...(open && {
        transform: "translateY(0)",
        fontSize: scale(-1),
        marginBottom: "0.5rem",
      }),
    },

    cta: {
      [mediaQuery("sm", "max-width")]: {
        marginTop: "0.5rem",
      },
    },

    results: {
      maxWidth: rhythm(32),
      paddingTop: rhythm(1),
      margin: "0 auto",
    },
  };

  return merge(defaultStyles, styles);
};
