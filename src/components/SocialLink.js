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
  border-radius: 50px;
  transition: background-color 0.3s;
  & svg {
    object-fit: contain;
    @media ${breakpoints.laptop} {
      width: 3vw;
      height: 3vw;
    }
  }
  @media ${breakpoints.laptop} {
    width: 5vw;
    height: 5vw;
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
        <a href={children} target="_blank" rel="noopener noreferrer">
          <SvgSelector svg={svg} />
        </a>
      </Button>
    </li>
  );
};

export default SocialLink;
