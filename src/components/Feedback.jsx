import React from 'react'
import { Button, Container } from 'react-bootstrap';

const Feedback = () => {
  return (
    <Container className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <p className="fs-2 text-center">If you have any feedback or feature ideas for this website, join the discord server to communicate with the developer directly.</p>
      <Button className="mt-5" as="a" variant="primary" href="https://discord.gg/fbfbtA2xjx">
        Join the Discord Server
      </Button>
    </Container>
  );
}

export default Feedback
