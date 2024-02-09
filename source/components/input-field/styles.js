import merge from "lodash/merge";
import { isBoolean } from "../../lib/form";

export default (
  { label, type, touched, invalid, readOnly, status, styles },
  { colors, fonts, measures, radiuses, rhythm, scale, treatments }
) => {
  const checkbox = isBoolean(type);
  const textarea = ["textarea", "contenteditable"].indexOf(type) > -1;
  const isInvalid = touched && invalid;

  const defaultStyles = {
    root: {
      display: "block",
      position: "relative",
      paddingLeft: checkbox ? rhythm(1.25) : "0",
      fontFamily: fonts.body,
      textAlign: "left",
      marginBottom: rhythm(1),
      ...treatments.inputRoot,
    },

    field: checkbox
      ? {
          position: "absolute",
          top: rhythm(0.125),
          left: 0,
          width: rhythm(0.75),
          height: rhythm(0.75),
          border: `thin solid ${isInvalid ? colors.danger : colors.lightGrey}`,
          boxShadow: isInvalid ? `0 0 5px ${colors.danger}` : "none",
          borderRadius: rhythm(radiuses.small),

          "&:focus": {
            borderColor: isInvalid ? colors.danger : colors.secondary,
            boxShadow: `0 0 5px ${
              isInvalid ? colors.danger : colors.secondary
            }`,
          },
        }
      : {
          display: "block",
          width: "100%",
          textAlign: "left",
          backgroundColor: colors.light,
          color: readOnly ? colors.lightGrey : colors.dark,
          padding: rhythm([textarea ? 0.25 : 0.125, 0.333]),
          height: textarea ? "auto" : rhythm(1.666),
          lineHeight: textarea ? "1.333em" : rhythm(1.666),
          minHeight: textarea && rhythm(3.25),
          border: `thin solid ${isInvalid ? colors.danger : colors.lightGrey}`,
          boxShadow: isInvalid ? `0 0 5px ${colors.danger}` : "none",
          borderRadius: rhythm(radiuses.small),
          WebkitMinLogicalWidth: "calc(100% - 18px)",

          ...((!!status || type === "password") && {
            paddingRight: rhythm(1.5),
          }),

          ...(type === "textarea" && {
            maxHeight: rhythm(12),
            resize: "vertical",
          }),
          ...treatments.input,

          "&:focus": {
            borderColor: isInvalid ? colors.danger : colors.secondary,
            boxShadow: `0 0 5px ${
              isInvalid ? colors.danger : colors.secondary
            }`,
          },

          b: {
            fontWeight: "bold",
          },

          i: {
            fontStyle: "italic",
          },

          "s, strike": {
            textDecoration: "line-through",
          },

          u: {
            textDecoration: "underline",
          },
        },

    status: {
      position: "absolute",
      top: label ? rhythm(1.633) : rhythm(0.5),
      right: rhythm(0.5),
      pointerEvents: "none",
    },

    toggle: {
      position: "absolute",
      top: label ? rhythm(1.633) : rhythm(0.5),
      right: rhythm(0.5),
      lineHeight: rhythm(0.666),
      fontSize: scale(-1),
      fontWeight: "bold",

      "&:before": {
        content: '""',
        position: "absolute",
        top: rhythm(-0.333),
        right: rhythm(-0.333),
        bottom: rhythm(-0.333),
        left: rhythm(-0.333),
      },
    },

    remaining: {
      position: "absolute",
      top: label ? rhythm(1.633) : rhythm(0.5),
      right: rhythm(0.5),
      pointerEvents: "none",
      fontSize: scale(-1),
      opacity: 0.25,

      '&[data-warning="true"]': {
        color: colors.danger,
      },

      '&[data-hidden="false"]': {
        opacity: 0.75,
      },
    },
  };

  return merge(defaultStyles, styles);
};
