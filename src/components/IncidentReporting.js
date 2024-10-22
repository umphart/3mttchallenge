import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const IncidentReporting = () => {
  const [report, setReport] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(report); // Placeholder for submission logic
    alert('Incident Reported Successfully');
    setReport(''); // Clear the textarea after submission
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Report a Cyber Incident</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="incidentDescription">Describe the Incident</Label>
          <Input
            type="textarea"
            id="incidentDescription"
            value={report}
            onChange={(e) => setReport(e.target.value)}
            placeholder="Describe the incident..."
            required
          />
        </FormGroup>
        <Button color="primary" type="submit">Submit Report</Button>
      </Form>
    </Container>
  );
};

export default IncidentReporting;
