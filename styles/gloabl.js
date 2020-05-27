import styled from "styled-components";

// import { injectGlobal } from "styled-components";

// injectGlobal`
//   body {
//     padding: 0;
//     margin: 0;
//     font-family: Roboto, sans-serif;
//   }
// `;

export const SpanTag = styled.span`
  color: ${(props)=>(props.color? props.color:"")};
  margin: ${(props)=>(props.margin? props.margin:"")};
  min-height: 1000px;
`;


