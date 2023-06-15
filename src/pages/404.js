import Wrapper from "components/Wrapper";
import styled from "styled-components";
import { breakpoints } from "styles/variables";

const StWrapper = styled.div`
  margin: 200px auto 289px;
  width: fit-content;
  text-align: center;
  @media ${breakpoints.laptop} {
    margin: 100px auto 189px;
  }
`;
const StTitle = styled.h2`
  opacity: 0.3;
  font-size: 250px;
  line-height: 300px;
  text-align: center;

  @media ${breakpoints.laptop} {
    font-size: 50px;
    line-height: 50px;
  }
`;
const Label = styled.span`
  font-size: 40px;
  line-height: 48px;
  @media ${breakpoints.laptop} {
    font-size: 20px;
    line-height: 28px;
  }
`;

export default function Error() {
  return (
    <Wrapper>
      <StWrapper>
        <StTitle>404</StTitle>
        <Label>Страница не найдена</Label>
      </StWrapper>
    </Wrapper>
  );
}
