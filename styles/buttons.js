import styled from "styled-components";
import { Button } from "react-bootstrap";

export const NormalButton = styled(Button)`
  font-size: 14px !important;
  border-color: ${(props) => (props.background ? `${props.background} !important` : "none")};
  color: ${(props) => (props.color ? `${props.color} !important` : "#0076FK")};
  padding: ${(props) => (props.padding ? `${props.padding} ` : "10px 43px 10px 10px ")};
  margin: ${(props) => (props.margin ? `${props.margin} ` : "10px 43px 10px 10px ")};
  border-radius: 0px !important;
  id: ${(props) => (props.id ? `${props.id} ` : "")};
  display: ${(props) => (props.display ? `${props.display} ` : "block")};
  background-color: ${(props) => (props.bgcolor ? `${props.bgcolor} ` : "#0076FF")};
`;