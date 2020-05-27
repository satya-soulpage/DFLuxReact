import React from "react";
// react boostrap
import { Form, Col } from "react-bootstrap";
import { FormLabelPrimary } from "styles/forms";
//style components
// import { DashboardButton } from "styles/buttons";
import { Paragraph } from "styles/typography";
// formik
import { useFormik } from "formik";
//components
// import { IconButton } from "components/buttons";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function DataSourceForm(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      fashopi_id: "",
      description: "",
      email: "",
      mobileNumber: "",
    
      language: "",
      address: "",
    },
    validate: "",
    validateOnChange: false,
    onSubmit: (values) => {},
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Row>
        <Col>
          <FormLabelPrimary>Database Name</FormLabelPrimary>
          <Form.Control
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            isInvalid={formik.errors.name}
          />
          {formik.errors.name ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          ) : null}
        </Col>
        <Col>
          <FormLabelPrimary>Database User</FormLabelPrimary>
          <Form.Control
            type="text"
            value={formik.values.fashopi_id}
            onChange={formik.handleChange("fashopi_id")}
            isInvalid={formik.errors.fashopi_id}
          />
          {formik.errors.fashopi_id ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.fashopi_id}
            </Form.Control.Feedback>
          ) : null}
        </Col>
      </Form.Row>
     
      <Form.Row className="mt-3">
        <Col>
          <FormLabelPrimary>Database Password</FormLabelPrimary>
          <Form.Control
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            isInvalid={formik.errors.email}
          />
          {formik.errors.email ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          ) : null}
        </Col>
        <Col>
          <FormLabelPrimary>Database Host</FormLabelPrimary>
          <Form.Control
            type="text"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange("mobileNumber")}
            isInvalid={formik.errors.mobileNumber}
          />
          {formik.errors.mobileNumber ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.mobileNumber}
            </Form.Control.Feedback>
          ) : null}
        </Col>
      </Form.Row>
      <Form.Row className="mt-3">
        <Col>
          <FormLabelPrimary>Database Port</FormLabelPrimary>
          <Form.Control
            type="text"
            value={formik.values.language}
            onChange={formik.handleChange("language")}
            isInvalid={formik.errors.language}
          />
          {formik.errors.language ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.language}
            </Form.Control.Feedback>
          ) : null}
        </Col>
        <Col>
          <FormLabelPrimary>Database Display Name</FormLabelPrimary>
          <Form.Control
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange("address")}
            isInvalid={formik.errors.address}
          />
          {formik.errors.address ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.address}
            </Form.Control.Feedback>
          ) : null}
        </Col>
      </Form.Row>
      <hr className="mt-5" />
      
     
    </Form>
  );
}
export default DataSourceForm;
