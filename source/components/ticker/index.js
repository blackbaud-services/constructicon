import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "../with-styles";
import styles from "./styles";

import BaseTicker from "react-ticker";

const Ticker = ({
  classNames,
  direction,
  items = [],
  label,
  mode,
  offset,
  pauseOnHover,
  speed,
}) => {
  const [move, setMove] = useState(true);
  const speeds = {
    snail: 5,
    slow: 7.5,
    medium: 10,
    fast: 12.5,
    cheetah: 20,
  };

  return (
    <div
      className={`c11n-ticker ${classNames.root}`}
      onMouseOver={() => pauseOnHover && setMove(false)}
      onMouseLeave={() => setMove(true)}
    >
      <BaseTicker
        direction={direction}
        mode={mode}
        move={move}
        offset={offset}
        speed={speeds[speed]}
      >
        {() => (
          <ul className={classNames.items}>
            {items.map((item, index) => (
              <li className={classNames.item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </BaseTicker>
      {label && <div className={classNames.label}>{label}</div>}
    </div>
  );
};

Ticker.propTypes = {
  /**
   * The background color
   */
  background: PropTypes.string,

  /**
   * The color of the text
   */
  foreground: PropTypes.string,

  /**
   * The scrolling direction
   */
  direction: PropTypes.oneOf(["toLeft", "toRight"]),

  /**
   * The height (passed to rhythm)
   */
  height: PropTypes.number,

  /**
   * Items to display in animated scroll
   */
  items: PropTypes.array.isRequired,

  /**
   * The label text
   */
  label: PropTypes.string,

  /**
   * The label background color
   */
  labelBackground: PropTypes.string,

  /**
   * The color of the label text
   */
  labelForeground: PropTypes.string,

  /**
   * The mode for the ticker
   */
  mode: PropTypes.oneOf(["await", "chain", "smooth"]),

  /**
   * Ticker offset
   */
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Pause ticker on hover?
   */
  pauseOnHover: PropTypes.bool,

  /**
   * Animation speed
   */
  speed: PropTypes.oneOf(["snail", "slow", "medium", "fast", "cheetah"]),

  /**
   * Custom styles to be applied
   */
  styles: PropTypes.object,
};

Ticker.defaultProps = {
  background: "shade",
  foreground: "dark",
  direction: "toLeft",
  height: 2.5,
  labelBackground: "primary",
  labelForeground: "light",
  mode: "smooth",
  offset: "100%",
  pauseOnHover: true,
  speed: "slow",
  styles: {},
};

export default withStyles(styles)(Ticker);
