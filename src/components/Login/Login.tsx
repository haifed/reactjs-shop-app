import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Login/Login.css";

// import { history } from "../helpers/history";
import Auth from "../../api/Auth.service";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [isLoggedin, setIsLoggedin] = useState(false);

  // const user = {
  //   email: 'eve.holt@reqres.in',
  //   password: 'cityslicka'
  // }

  const login=()=>{
    let user = {
      email: email,
      password: password
    };
    Auth.login(user)
    setIsLoggedin(true);
  }

  return (
    <div className="login d-flex justify-content-center align-items-center">
      <div className="col-10 col-sm-8 col-md-4" >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onInput={(e)=>{setEmail(e.currentTarget.value)}} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onInput={(e)=>{setPassword(e.currentTarget.value)}} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={login}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Login;
