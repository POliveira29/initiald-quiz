import styled from "styled-components";

const Loading = styled.img`
  background-image: url("https://media.giphy.com/media/SWwMlmElqy3sY/giphy.gif");
`;

function LoadingWidget() {
  return <Loading></Loading>;
}

export default LoadingWidget;
