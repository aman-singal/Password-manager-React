import React, { useState } from 'react'
import {Form , Button} from 'react-bootstrap'
import fire from './Fire'
import { useHistory } from "react-router-dom";

function Signup() {

    const history = useHistory()
    const[email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')

    function UserSignUp(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email,password)
        .then(u => {
        console.log("User CEATED SUCCESSFULLY")
        history.push('/')
    })
    .catch(err => {
        setMessage(err.message)
    })

    }

    return (
        <div>
            <h1>Signup Page</h1>
            <Form>
            {message? <h4>{message}</h4>: null}
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=> setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={e=> UserSignUp(e)}>Submit</Button>
            </Form>
        </div>
    )
}

export default Signup
