const styles = (props, { scale, rhythm, shadows, radiuses, mediaQuery }) => {
  const hasMobileImages =
    props.options && props.options.find((option) => option.mobileImage);
  return {
    root: {
      marginBottom: rhythm(1),
    },
    option: {
      marginBottom: 10,
      boxShadow: shadows.full,
      display: "flex",
      flexDirection: "column",
      borderRadius: rhythm(radiuses.small),
      ":hover": {
        cursor: "pointer",
        boxShadow: shadows.light,
      },
    },
    optionSelected: {
      boxShadow: shadows.light,
      p: {
        border: "none",
      },
    },
    image: {
      borderTopLeftRadius: rhythm(radiuses.small),
      borderTopRightRadius: rhythm(radiuses.small),
    },
    desktopImage: {
      display: hasMobileImages ? "none" : "block",
      [mediaQuery("md", "min-width")]: {
        display: "block",
      },
    },
    mobileImage: {
      [mediaQuery("md")]: {
        display: "none",
      },
    },
    optionLabelContainer: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    optionLabel: {
      textAlign: "center",
      padding: rhythm(0.5),
      paddingBottom: 0,
      fontSize: scale(-0.5),
    },
    radioContainer: {
      textAlign: "center",
    },
    radio: {
      margin: rhythm(0.5),
    },
    disabled: {
      opacity: 0.5,
      ":hover": {
        cursor: "default",
      },
    },
  };
};

export default styles;
