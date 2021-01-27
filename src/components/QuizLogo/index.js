import styled from "styled-components";

import React from "react";
import PropTypes from "prop-types";

function Logo({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124.12 62.13"
    >
      <defs></defs>
      <title>Asset 6</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <text
            className="cls-1"
            transform="matrix(0.94, -0.32, 0.31, 0.95, 70.26, 54.14)"
          >
            Quiz
          </text>
          <text
            className="cls-2"
            transform="translate(0.13 27.02) scale(0.99 1)"
          >
            INITIAL D
          </text>
        </g>
      </g>
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  .cls-1 {
    font-size: 30.01px;
    fill: #df0009;
    font-family: BrushScriptStd, Brush Script Std;
  }
  .cls-2 {
    font-size: 30.04px;
    fill: #fff;
    stroke: #000;
    stroke-miterlimit: 10;
    stroke-width: 0.25px;
    font-family: Impact, Impact;
  }
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
