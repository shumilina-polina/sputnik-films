import styled from "styled-components";
import SvgSelector from "./SvgSelector";
import { breakpoints, colors } from "styles/variables";

const Button = styled.button`
  width: 72px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.03);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 50px;
  transition: background-color 0.3s;
  position: relative;
  &::before {
    border-radius: 100px;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
  & a {
    height: 100%;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  & svg {
    object-fit: contain;
    @media ${breakpoints.laptop} {
      width: 3vw;
      height: 3vw;
    }
    @media ${breakpoints.mobile} {
      width: 23px;
      height: 23px;
    }
  }
  @media ${breakpoints.laptop} {
    width: 5vw;
    height: 5vw;
  }
  @media ${breakpoints.mobile} {
    width: 40px;
    height: 40px;
  }
  &:hover {
    background-color: ${colors.text1};
  }
  &:active,
  &:focus {
    background-color: ${colors.text2};
  }
`;

const SocialLink = ({ children, svg }) => {
  return (
    <li>
      <Button>
        {children ? (
          <a href={children} target="_blank" rel="noopener noreferrer">
            <SvgSelector svg={svg} />
          </a>
        ) : (
          <SvgSelector svg={svg} />
        )}
      </Button>
    </li>
  );
};

export default SocialLink;
