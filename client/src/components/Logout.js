import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user'

function Logout() {

const {user, logout} = useContext(UserContext)
const navigate = useNavigate()

const logoutUser = () => {
        fetch ('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' }
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

if (user) {
    return (
        <div>
              <h2>Hello {user.name} </h2>
                    <h4>Click "Logout" to logout</h4>
                    <p></p>
                    <br/>
                    <button onClick={logoutUser}>Logout</button> 
        </div>
  )
} else {
    return(
        <div>
            <h3>If you don't wish to logout, click any link on the menu</h3>
        </div>
    )
  }
}

export default Logout