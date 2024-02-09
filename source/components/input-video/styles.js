import merge from "lodash/merge";

export default ({ styles }, { measures, rhythm, scale }) => {
  const baseStyles = {
    root: {
      display: "block",
      position: "relative",
      marginBottom: rhythm(1),
    },

    video: {
      textAlign: "center",
    },

    clear: {
      marginTop: rhythm(0.5),
      fontSize: scale(-1),
      textDecoration: "underline",
      opacity: 0.5,
    },

    note: {
      display: "block",
      margin: rhythm([-0.5, 0, 1]),
      fontSize: scale(-1),
      lineHeight: measures.medium,
      opacity: 0.5,
    },
  };

  return merge(baseStyles, styles);
};
