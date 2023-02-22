import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";

import Navbar from "../Menus/Navbar";
import Sidebar from "../Menus/Sidebar";
export default function AppIndex() {
  return (
    <div>
      <Row className="m-0 p-0">
        <Col md={2} className='side_bar'>
          <Sidebar />
        </Col>
        <Col md={10} className=''>
        <div className="nav_bar">
        <Navbar />

        </div>
          <Row className="m-0">
            <Col md={9} className="p-0 m-0 _outlet">
              <Outlet />
            </Col>
            <Col md={3} className="p-0 m-0 _outlet"></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
