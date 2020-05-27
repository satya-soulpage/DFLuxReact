import styled from "styled-components";

// Cards

export const PrimaryCard = styled.div`
  padding: 30px 25px;
  background: #ffffff;
  border-top: ${(props) => (props.card === "event" ? "none" : "1px solid #dddee2 !important")};
  border-bottom: 1px solid #dddee2 !important;
  border-left: 1px solid #dddee2 !important;
  border-right: 1px solid #dddee2 !important;
`;

export const StyledCard = styled.div`
// position: absolute;
width: 217px;
height: ${(props)=> (props.height?props.height:"110px")};
// left: 333px;
background: white;
border: 2.0px solid #EDEEEF;
box-sizing: border-box;
border-radius: 4px;
margin: 6px;
`;

