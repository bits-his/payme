import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import "../AppStyle/style.css";

export default function NewRegistration() {
  const navigate = useNavigate();
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          {/* <Container className="mt-3"> */}
          <Card className="app_card shadow p-3">
            {/* <CardBody> */}
            <div>
              <button
                className="primary-button"
                onClick={() => navigate("/registration")}
              >
                New Registration
              </button>
            </div>

            <div className="mt-2">
              <Table borderless striped size="sm" responsive>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Date Registrations</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </Table>
            </div>
            {/* </CardBody> */}
          </Card>
          {/* </Container> */}
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
}
