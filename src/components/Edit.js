import React , {useState , useEffect , useContext} from 'react'
import {Button , Form} from 'react-bootstrap'
import firebase from 'firebase'
import {UserContext} from './UserContext'

function Edit() {

    const[newData,setnewData] = useState('')
    const [data,setData] = useState([])
    const[select,setSelect] = useState('')
    const[isEdit,setisEdit] = useState({
                                    id: null,
                                    isEdit: false,
                                    type: null,
                                    })
    let userUID = useContext(UserContext)
    const [counter,setCounter] = useState(1)


    function editEmail(){
        setisEdit({
            id: select,
            edit: true,
            type: "email"
        })

    }


    function editPassword(){
        setisEdit({
            id: select,
            edit: true,
            type: "password"
        })
    }
    function deleteData(e){
        e.preventDefault()
        
        firebase.firestore().collection(userUID).doc(select).delete()
        setSelect("")


    }
    

    function updateData(e){
        e.preventDefault()
        
        if(isEdit.type === 'email'){
            firebase.firestore().collection(userUID).doc(isEdit.id).update({
                email: newData
            })
        }else{
            firebase.firestore().collection(userUID).doc(isEdit.id).update({
                password: newData,
            })
        }


        setisEdit({
            id: null,
            edit: false,
            type: null
        })
    }
    function cancelChange(e){
        e.preventDefault()
        setisEdit({
            id: null,
            edit: false,
            type: null,
        })
    }

    useEffect(()=>{

        if(userUID){
            firebase.firestore().collection(userUID).onSnapshot(snap => {
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
        <div style={{margin: '25px'}}>
            <h1> Edit Password</h1>
            <div className="input-group mb-3" style={{width: '50%'}}>
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Options</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={e=> setSelect(e.target.value)}>
                    <option selected>|---Choose---|</option>
                    {data.map(item=>
                        <option key={item.id}  value={item.id}>{item.email}</option>
                    )}
                    
                </select>
            </div>

            {isEdit.edit?
            <>
                <Form>
                <Form.Label>Enter New {isEdit.type}</Form.Label>
                <Form.Control type={isEdit.type} placeholder='Enter' value={newData} style={{width: '50%'}} onChange={e=> setnewData(e.target.value)} />
                <Button style={{margin: '25px'}} variant="success" type='submit' onClick={e=>updateData(e)}> Save</Button>
                <Button style={{margin: '25px'}} variant="dark" type='submit' onClick={e=>cancelChange(e)}> Cancel</Button>

                </Form>

            </>
             : 
            (<>
            <Button style={{margin: '25px'}} variant="primary" onClick={e=> editEmail(e)}>Edit Email Address</Button>
            <Button style={{margin: '25px'}} variant="warning" onClick={e=> editPassword(e)}>Edit Password</Button>
            <Button style={{margin: '25px'}} variant='danger' onClick={e=> deleteData(e)}>Delete</Button>
            </>
            )}            


            

        </div>
    )
}

export default Edit
