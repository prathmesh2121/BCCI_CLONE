import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export const Contact = () => {
  return (
    <section style={{ marginLeft: '200px',marginRight: '200px', textAlign: 'left', marginTop: '50px'}}>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Feedback</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <center>
      <Button variant="primary">Submit</Button>
      </center>
      </Form.Group>
    </Form>
    </section>
  );
}
