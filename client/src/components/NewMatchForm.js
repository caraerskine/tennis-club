import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { useParams } from 'react-router-dom'


function AddMatchForm(){
    const [datetime, setDatetime] = useState("")
    const [skill, setSkill] = useState(false)
    const [phone, setPhone] = useState("")
    const { id } = useParams()
    const { onAddMatch, errors } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMatch({
            datetime: datetime,
            skill_level: false,
            phone: phone,
            club_id: id
        })
    }

  return (
   <>
   <br></br>
    Create a New Match 🎾
    <br></br>
    <form onSubmit={handleSubmit}>
          <br/>
        <label>Date and Time: </label>
        <input 
            type="datetime-local"
            id="datetime"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            placeholder="09/21/2023, 7:30"  
        /> <br/>
        <br/>
        <label>Skill Level: </label>
        <select
            id="skill_level"
            value={skill}
            onChange={(e) => setSkill(e.target.value === "true")}>
                <option value={"beginner"}>beginner</option>
                <option value={"intermediate"}>intermediate</option>
        </select> <br/>
        <br/>
        <label>Phone Number: </label>
        <input 
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone number"
        />  <br/>
        <br/>
        <br/>
        <button type="submit">Save match</button>

        {errors.map((error, index) => (
        <p key={index} className="errors">
          {error}
        </p>
      ))}
    </form>
    </>
  )
}

export default AddMatchForm

//sender_id, receiver_id, user_id and club_id

//when I create the new match, how do i invite a user to play the match?

//would there need to be a field for that? what would it be called?

//how do i know what users are available to invite?

//how do I have the club name on there as well? bc u click on a particular club card
