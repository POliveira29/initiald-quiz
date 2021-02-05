import styled from "styled-components";

import React from "react";
import PropTypes from "prop-types";

function Logo({ className }) {
  return (
    <svg
      className={className}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 350 94"
    >
      <style type="text/css"></style>
      <text transform="matrix(1 0 0 1 41.3335 61.3018)" class="st0 st1 st2">
        INITIAL D
      </text>
      <text
        transform="matrix(0.8325 -0.5541 0.5541 0.8325 259.2495 90.6722)"
        class="st3 st4 st5"
      >
        Quiz
      </text>
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  .st0 {
    fill: #ffffff;
    stroke: #000000;
    stroke-miterlimit: 10;
  }
  .st1 {
    font-family: Impact, Impact;
  }
  .st2 {
    font-size: 67.0708px;
  }
  .st3 {
    fill: #df0009;
  }
  .st4 {
    font-family: BrushScriptStd, Brush Script Std;
  }
  .st5 {
    font-size: 28.6268px;
  }
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
