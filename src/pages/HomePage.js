import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import ThreatAlerts from '../components/ThreatAlerts';

const HomePage = () => (
  <Container className="mt-5">
    <Row>
      <Col className="text-center">
        <h1>Welcome to CyberShield Nigeria</h1>
        <Card className="mt-4">
          <CardBody>
            <CardTitle tag="h5">Latest Threat Alerts</CardTitle>
            <CardText>
              Stay informed about the latest cyber threats and protect your data.
            </CardText>
            <ThreatAlerts />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
