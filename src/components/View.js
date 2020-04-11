import React, { useEffect, useState , useContext} from 'react'
import {Table} from 'react-bootstrap'
import './View.css'
import firebase from 'firebase'
import {UserContext} from './UserContext'

function View() {

    const userUID = useContext(UserContext)
    const [data,setData] = useState([])
    const [counter,setCounter] = useState(1)

    useEffect(()=>{
        
        if(userUID){
            const unsuscribe = firebase.firestore().collection(userUID).onSnapshot(snap => {
                const prime = snap.docs.map(item=>({
                    id: item.id,
                    email: item.data().email,
                    password: item.data().password
                }))
                setData(prime)
            })
        }
        else{

            setCounter(counter+ 1)
        }



    }, [counter])

    return (
        
        <div className="justify-content-center">
            {console.log(userUID)}
            <h1> View Password</h1>
            <br></br>
            <div style={{width: '40%' , justifyContent: 'center' , alignItems: 'center'}} >
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th style={{width: '5%'}}>#</th>
                    <th style={{width: '20%'}}>Email Address</th>
                    <th style={{width: '15%'}}>Password</th>

                    </tr>
                </thead>
                <tbody>

                   {data.map(item=> <tr key={item.id}>
                    <td></td>
                   <td>{item.email}</td>
                   <td>{item.password}</td>
                   </tr>)}
                    </tbody>
                    </Table>
            </div>
        </div>
    )
}

export default View
