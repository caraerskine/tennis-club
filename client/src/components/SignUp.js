import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user';

function SignUp() {

    const [form, setForm] = useState({
        name: "",
        avatar_url: "",
        username: "",
        password: "",
        password_confirmation: "",
        email: ""
    })

    const {fetchUser, signUpError} = useContext(UserContext);


    const handleUpdate = (e) => {
        setForm({...form, [e.target.id]: e.target.value})
    }

    const signUp = (e) => {
        e.preventDefault()
        fetchUser('/signup', 'POST', form)
    }

  console.log("looking for name", form)

    return (
    <div className="signup-form">
        <h2>Sign-up</h2>
        <form onSubmit={(e) => signUp(e)}>
        <label>Name:</label>
            <input 
                type="text" 
                id="name"
                placeholder="Type in here…"
                value={form.name} 
                onChange={handleUpdate}
        />
          <br></br>
          <br></br>
        <label>Avatar:</label>
            <input 
                type="text" 
                id="avatar_url"
                placeholder="https://…"
                value={form.avatar_url} 
                onChange={handleUpdate}
        />
          <br></br>
          <br></br>
            <label>Username:</label>
            <input 
                type="text" 
                id="username"
                placeholder="Type in here…"
                value={form.username} 
                onChange={handleUpdate}
        />   
          <br></br>
          <br></br>
            <label>Email:</label>
            <input 
                type="email" 
                id="email"
                placeholder="example@test.com…"
                value={form.email} 
                onChange={handleUpdate}
            />
          <br></br>
          <br></br>
          <label>Password:</label>
          <input 
                type="password" 
                id="password"
                placeholder="8-20 characters…"
                value={form.password} 
                onChange={handleUpdate}
          />
          <br></br>
          <br></br>
          <label>Confirm Password:</label>
          <input 
                type="password" 
                id="password_confirmation"
                placeholder="passwords must match"
                value={form.password_confirmation} 
                onChange={handleUpdate}
          />
          <br></br>
          <br></br>
          {/* <div>Checking...</div> */}
          <input type="submit"/>
          </form>
            <ul>
                {signUpError}
            </ul>
    </div>
    )

}

export default SignUp;

//bcrypt will check via authroize that password and pasword conf are the same