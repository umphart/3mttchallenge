import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import TrainingSimulation from '../components/TrainingSimulation';

const TrainingPage = () => (
  <Container className="mt-5">
    <Row>
      <Col>
        <h2 className="text-center">Training</h2>
        <Card className="mt-4">
          <CardBody>
            <CardTitle tag="h5">Enhance Your Skills</CardTitle>
            <p>
              Participate in our interactive training simulations designed to help you 
              understand and respond to various cybersecurity scenarios.
            </p>
            <TrainingSimulation />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default TrainingPage;
