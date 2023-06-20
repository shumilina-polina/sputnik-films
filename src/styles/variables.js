import { css } from "styled-components";

export const sizes = {
  desktopWidth: "1260px",
  mobileWidth: "770px",
};

export const breakpoints = {
  laptop: `(max-width: ${sizes.desktopWidth})`,
  mobile: `(max-width: ${sizes.mobileWidth})`,
};

export const colors = {
  bg: "#151515",
  text6: "rgba(255, 255, 255, 0.6)",
  text2: "rgba(255, 255, 255, 0.2)",
  text3: "rgba(255, 255, 255, 0.3)",
  text4: "rgba(255, 255, 255, 0.4)",
  text5: "rgba(255, 255, 255, 0.5)",
  text1: "rgba(255, 255, 255, 0.1)",
  red: "#e30613",
};

export const mixins = {
  jb4: css`
    font-family: "JetBrains Mono", monospace;
    font-style: normal;
    font-weight: 400;
  `,
  jb5: css`
    font-family: "JetBrains Mono", monospace;
    font-style: normal;
    font-weight: 500;
  `,
  linkHover: css`
    color: ${colors.text6};
    transition: color 0.3s;
    &:hover {
      color: ${colors.text4};
    }
    &:active {
      color: ${colors.text2};
    }
  `,
  text: css`
    font-family: "JetBrains Mono", monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.015em;
    @media ${breakpoints.laptop} {
      font-size: 1.11vw;
    }
  `,
};
