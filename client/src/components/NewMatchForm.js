import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { useParams } from 'react-router-dom'


function AddMatchForm(){
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [skill, setSkill] = useState(false)
    const [contact, setContact] = useState("")
    const { id } = useParams()
    const { onAddMatch, errors } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMatch({
            date: date,
            time: time,
            skill_level: false,
            contact_info: contact,
            club_id: id
        })
    }

  return (
   <>
   <br></br>
    New Match Form
    <br></br>
    <form onSubmit={handleSubmit}>
          <br/>
        <label>Date: </label>
        <input 
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="MM/DD/YYYY"  
        /> <br/>
        <br/>
        <br/>
        <label>Time: </label>
        <input 
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="i.e., 2:00 pm"  
        /> <br/>
        <br/>
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
        <label>Contact Info: </label>
        <input 
            type="text"
            id="contact_info"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
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
