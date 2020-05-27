import { Input } from "../../styles/theme";
// react boostrap
import { Form, Col, Row, Tab, Nav, FormCheck, InputGroup, Image } from "react-bootstrap";

function HeaderInput(props) {
    return (
        <div>
             <InputGroup.Text style={props.data.style}></InputGroup.Text>
        </div>
    )
}

export { HeaderInput }