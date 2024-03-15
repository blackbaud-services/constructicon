import React from "react";
import PropTypes from "prop-types";
import withStyles from "../with-styles";
import styles from "./styles";

const Video = ({ classNames, embed, styles, url, ...props }) => {
  if (embed && embed.html) {
    return (
      <div
        className={`c11n-video ${classNames.root}`}
        dangerouslySetInnerHTML={{ __html: embed.html }}
        {...props}
      />
    );
  }

  if (!url) {
    return null;
  }

  return (
    <div className={`c11n-video ${classNames.root}`} {...props}>
      <iframe src={url} frameBorder={0} />
    </div>
  );
};

Video.propTypes = {
  /**
   * The background color of the section
   */
  background: PropTypes.string,

  /**
   * The color of the border
   */
  borderColor: PropTypes.string,

  /**
   * The width of the border
   */
  borderWidth: PropTypes.number,

  /**
   * The radius of the section
   */
  radius: PropTypes.string,

  /**
   * The margin to be applied
   */
  margin: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),

  /**
   * The custom styles to be applied to the section
   */
  styles: PropTypes.object,

  /**
   * A video oembed object
   */
  embed: PropTypes.object,

  /**
   * The video embed URL
   */
  url: PropTypes.string,
};

Video.defaultProps = {
  background: "dark",
  margin: 0,
};

export default withStyles(styles)(Video);
