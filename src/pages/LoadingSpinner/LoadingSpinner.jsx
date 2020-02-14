import React from "react";
import {Spinner, Row, Container} from "react-bootstrap";
import "./LoadingSpinner.styles.css";

const LoadingSpinner = () => (
    <Container>
    <Row>
  
    <Spinner animation="border" className="spinner"/>
 
    </Row>
    </Container>
)

export default LoadingSpinner;