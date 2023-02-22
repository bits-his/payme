import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Container, Row, Table } from "reactstrap";
import '../AppStyle/style.css'

export default function NewRegistration() {
  const navigate = useNavigate();
  return (
    <div>
      <Container className="mt-3">
        <button className="primary-button" onClick={() => navigate("/registration")}>
          NewRegistration
        </button>
        <Card className="mt-3 app_card shadow p-3">
          <CardBody>
            <Row>
              <Table bordered>
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
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
