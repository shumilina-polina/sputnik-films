import styled from "styled-components";
import { breakpoints } from "styles/variables";

const Styled = styled.div`
  max-width: 1244px;
  height: 100%;
  margin: auto;
  padding: 0;
  @media ${breakpoints.laptop} {
    max-width: 95%;
  }
  @media ${breakpoints.tablet} {
    // overflow-x: hidden;
  }
`;

const Wrapper = ({ children }) => {
  return <Styled>{children}</Styled>;
};

export default Wrapper;
