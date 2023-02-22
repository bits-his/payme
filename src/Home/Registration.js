import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Label,
  Row,
} from "reactstrap";

export default function Registration() {
  const _form = {
    first_name: "",
    last_name: "",
    phone_no: "",
    email: "",
    address: "",
    date: "",
    state: "",
    lga: "",
  };
  const [form, setForm] = useState(_form);

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleAdd = () => {
    setForm(_form);
    console.log(_form);
  };

  return (
    <div>
        <Row>
        <Col md={2}></Col>
        <Col md={8}>
      {/* <Container className=""> */}
        <Card className="app_card shadow  p-3">
          <CardBody>
            <h4 className="app_title">Customer Registration</h4>
            <Row>
              <Col md={6}>
                <Label className="label">First Name</Label>
                <input
                  className="input_field"
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label className="label">Last Name</Label>
                <input
                  className="input_field"
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label className="label">Phone No</Label>
                <input
                  className="input_field"
                  type="number"
                  name="phone_no"
                  value={form.phone_no}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label className="label">Email</Label>
                <input
                  className="input_field"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label className="label">Address</Label>
                <input
                  className="input_field"
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label className="label">Date</Label>
                <input
                  className="input_field"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label className="label">State</Label>
                <input
                  className="input_field"
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Label className="label">Local Government</Label>
                <input
                  className="input_field"
                  type="text"
                  name="lga"
                  value={form.lga}
                  onChange={handleChange}
                />
              </Col>
            </Row>{" "}
            <button onClick={handleAdd} className="mt-3 primary-button">
              Submit
            </button>
          </CardBody>
        </Card>
      {/* </Container> */}
        </Col>
        <Col md={2}></Col>
        </Row>
    </div>
  );
}
