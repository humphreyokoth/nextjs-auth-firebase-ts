import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <h1 className="text-center my-3">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e: any) => setData({ ...data, email: e.target.value })}
        
            value={data.email}
            required
            type='email'
            placeholder='Enter email'
        />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
