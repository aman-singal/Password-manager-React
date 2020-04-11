import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import fire from './Fire'

function UserSignout() {
    const history = useHistory();
    useEffect(() => {
        fire.auth().signOut();
        console.log('Job Done But Still Problem')
        history.push('/')
    }, [])
    return (
        <div>
            <h1>SignOut SuccessFull</h1>
        </div>
    )
}

export default UserSignout
