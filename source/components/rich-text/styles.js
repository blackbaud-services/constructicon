import merge from "lodash/merge";

export default (
  { lineClamp, size, styles },
  { measures, rhythm, scale, treatments }
) => {
  const headingStyle = (size) => ({
    ...treatments.head,
    fontSize: scale(size),
    marginBottom: rhythm(1),
  });

  const defaultStyles = {
    fontSize: scale(size),
    lineHeight: measures.medium,
    ...treatments.body,

    ...(lineClamp && {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lineClamp,
    }),

    "& p": {
      marginBottom: rhythm(1),
    },

    "& ul": {
      listStyleType: "disc",
      listStylePosition: "outside",
      marginBottom: rhythm(1),
    },

    "& ol": {
      listStyleType: "decimal",
      listStylePosition: "outside",
      marginBottom: rhythm(1),
    },

    "& li": {
      marginLeft: rhythm(1),
    },

    "& blockquote": {
      maxWidth: rhythm(25),
      marginBottom: rhythm(1),
      margin: "0 auto",
      textAlign: "center",
      fontWeight: 700,
      fontSize: scale(size + 1),
    },
    "& blockquote:before": {
      content: '"\\201C"',
    },
    "& blockquote:after": {
      content: '"\\201D"',
    },

    "& img": {
      display: "block",
      margin: "0 auto",
      width: "auto",
      maxWidth: "100%",
    },

    "& iframe": {
      marginBottom: rhythm(2),
    },

    "& strong, & b": {
      fontWeight: "bold",
    },

    "& em, & i": {
      fontStyle: "italic",
    },

    "& u": {
      textDecoration: "underline",
    },

    "& strike, & s, & del": {
      textDecoration: "line-through",
    },

    "& h1": {
      ...headingStyle(size + 4),
    },
    "& h2": {
      ...headingStyle(size + 3),
    },
    "& h3": {
      ...headingStyle(size + 2),
    },
    "& h4": {
      ...headingStyle(size + 1),
    },
    "& h5": {
      ...headingStyle(size),
    },
    "& h6": {
      ...headingStyle(size - 1),
    },

    "& > *:last-child": {
      marginBottom: 0,
    },
  };

  return {
    root: merge(defaultStyles, styles),
  };
};
