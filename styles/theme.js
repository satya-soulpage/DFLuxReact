import styled from "styled-components";

export const theme = {
  colors: {
    // colors
    primary: "#DD0C55",
    primary_light: "#EB6090",
    secondary: "#17A5A3",
    secondary_light: "#98E2E1",
    // greys
    grey1: "#E1E2E5",
    grey2: "#B5B5B8",
    grey3: "#86868A",
    grey4: "#5B5C68",
    grey5: "#35384D",
    borderSize: "20px",
  },
  // typography
  default_font: "",
};

export const SectionHeading = styled.h1`
// font-size: 36px;
  color: #0076FF;
  // text-align: center;
  position: absolute;
width: 133px;
height: 32px;
left: 46px;
top: -28px;

font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

letter-spacing: 0.1px;
`

export const Input = styled.input.attrs({ type: "text" })`
height : 10px
`