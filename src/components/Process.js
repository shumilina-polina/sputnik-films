import styled from "styled-components";
import { breakpoints, colors, mixins } from "styles/variables";

const Box = styled.div`
  border-top: 1px solid ${colors.text1};
  border-bottom: 1px solid ${colors.text1};
  & > div:last-child,
  & > div:first-child {
    height: 72px;
    width: 50%;
    border-right: 1px solid ${colors.text1};
    @media ${breakpoints.laptop} {
      height: 5vw;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 36px 12%;
    @media ${breakpoints.laptop} {
      padding: 5% 12%;
    }
    & > span {
      display: block;
      margin-bottom: 36px;
      ${mixins.text};
      color: ${colors.text3};
      @media ${breakpoints.laptop} {
        margin-bottom: 3vw;
      }
    }
    & > p {
      margin-bottom: 36px;
      @include jb4;
      font-size: 44px;
      line-height: 125%;
      text-align: center;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: ${colors.text5};
      @media ${breakpoints.laptop} {
        font-size: 2.78vw;
        margin-bottom: 3vw;
      }
    }
    & figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div {
        width: 72px;
        aspect-ratio: 1/1;
        margin-bottom: 16px;
        position: relative;
        @media ${breakpoints.laptop} {
          width: 5vw;
        }
        & > div {
          position: relative;
          &:first-child {
            position: absolute;
            filter: blur(38px);
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
          }
        }
      }
      & figcaption {
        ${mixins.text}
        display: flex;
        flex-direction: column;
        align-items: center;

        & > span:first-child {
          margin-bottom: 4px;
        }
        & > span:last-child {
          color: ${colors.text3};
        }
      }
    }
  }
`;

const Process = ({ children }) => {
  return (
    <Box>
      <div></div>
      <div>{children}</div>
      <div></div>
    </Box>
  );
};

export default Process;
