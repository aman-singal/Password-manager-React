import React, { useState, useReducer  , useContext} from 'react'
import {Button, Form, Alert  } from 'react-bootstrap'
import firebase from 'firebase'
import {UserContext} from './UserContext'

function Add() {

    let userUID = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const initMessage = {
        text: '',
        type: null
    }

    

    const reducer =(state,action)=>{

        switch(action){
            case 'success':
                return {text: "Added Successfully",
                        type: 'success'}
            case 'null_password':
                return {text: "Password cann't be empty",
                        type: 'danger'}
            case 'null_email':
                return {text: "Email cann't be empty",
                        type: 'danger'}

                }
            
        }
    

    const[message , dispatch] = useReducer(reducer,initMessage)

    function AddData(e){
        e.preventDefault()

        if(password && email){
            firebase.firestore().collection(userUID).add({
                email: email,
                password: password
            })
            setEmail('')
            setPassword('')
            dispatch('success')
        }
        if(password === '' && email){
            dispatch('null_password')
        }
        if(email === '' && password){
            dispatch('null_email')
        }


    }
    
    

    return (
        <div>

            {message.type? <h4>{message.text}</h4> : null}
            <h1 style={{textAlign: 'center'}}> Add Password</h1>
            <div style={{width: '50%' , marginLeft: '25px'}} > 
            <Form>
                
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>

                 </Form.Group>

                 <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)}/>
                 </Form.Group>
                 <Button variant="primary" type="submit" onClick={(e)=> AddData(e)}>
                 Submit
                 </Button>
                </Form>
            </div>
        </div>
    )
}

export default Add
