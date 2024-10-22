import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const EducationPage = () => (
  <Container className="mt-5">
    <Row>
      <Col>
        <h2 className="text-center">Cybersecurity Education</h2>
        <Card className="mt-4">
          <CardBody>
            <CardTitle tag="h5">Protect Yourself from Cyber Threats</CardTitle>
            <CardText>
              Learn how to safeguard your personal information and navigate the digital world securely with our educational programs.
            </CardText>
            <Button color="primary" href="/enroll">Enroll Now</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default EducationPage;
