import styled from "styled-components";
import { FormGroup,FormLabel,FormCheck,Form } from "react-bootstrap";

export const EcomItemSize = styled(FormGroup)`
  display: inline-block !important;
  margin-right: 10px;
  font-size: 18px;
  margin-bottom: 0px !important;
`;

export const FormLabelPrimary = styled(FormLabel)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #b5b5b8;
`;

export const RadioLabel = styled(FormCheck.Label)`
  font-size: 14px !important;
  font-weight: 300 !important;
  color: #35384D !important;
`;

export const RadioInput = styled(FormCheck.Input)`
margin-top: 8px !important;
margin-left: 9px !important; 
`;

export const FileInput = styled(Form.File)`
.form-control-file{
  border : 1px solid #ced4da !important;
  border-radius : 4px !important;
  padding : 4px;
}
`;
