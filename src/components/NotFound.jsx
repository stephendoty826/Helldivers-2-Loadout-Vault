import React from 'react'
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Container>
      <div className="d-flex align-items-center flex-column vh-85">
        <p className="display-6 mt-3">Not Found</p>
        <p>The page you are trying to visit does not exist.</p>
        <p><Link to="/">Click here</Link> to return to the home page.</p>
        
      </div>
    </Container>
  );
}

export default NotFound