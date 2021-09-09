import React, { useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import '../Styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    function validateForm() {
        return Email.length > 0 && Password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="login-box">
            <div className="login-main">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className=" pb-1" controlId="Emial">
                        <Form.Label>Login Form</Form.Label>
                    </Form.Group>
                    <Form.Control className="mb-2" autoFocus type="Email" value={Email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    <Form.Group size=" mb-3" controlId="Password">
                        <Form.Control className="mb-2" type="Password" value={Password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button block size=" mt-3" type="submit" disabled={!validateForm()}> Login </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;