import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Container, Form } from "react-bootstrap";
import FormAffiliate from "./FormAffiliate";
import SectionTitle from "../SectionTitle";
import MultiStep from "../MultiStep";

export default function FormSection() {
  const appContext = useContext(AppContext);
  const { translation, handleSubmit, validated, step } = appContext;
  return (
    <>
      <Container id={"form-section"}>
        <SectionTitle
          title={translation.formTitle}
          subtitle={translation.formSubtitle}
        />
      </Container>
      <Container>
        <Form className="affiliate-form" step={step} noValidate validated={validated} onSubmit={handleSubmit}>
          <MultiStep />
          <FormAffiliate />
        </Form>
      </Container>
    </>
  );
}
