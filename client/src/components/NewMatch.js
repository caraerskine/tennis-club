import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { useParams } from 'react-router-dom'
import { MatchesContext } from '../context/matches'


function NewMatch(){
    const [datetime, setDatetime] = useState("2023-09-21T07:30")
    const [skill, setSkill] = useState(false)
    const [phone, setPhone] = useState("")
    const { id } = useParams()
    const { errors } = useContext(UserContext)
    const { onAddMatch } = useContext(MatchesContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMatch({
            datetime: formattedDatetime(datetime),
            skill_level: skill,
            phone: phone,
            club_id: id
        })
    }

        const formattedDatetime = (date) => {
          
          return date.toLocaleString('en-US', {
          
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        });
      };
    

    console.log("skill", skill)
      console.log("datetime", typeof(datetime))

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
        /> <br/>
        <br/>
        <label>Skill Level: </label>
        <select
            id="skill_level"
            value={skill ? "intermediate" : "beginner"}
            onChange={(e) => setSkill(e.target.value === "beginner" ? false : true)}>
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

export default NewMatch

//sender_id, receiver_id, user_id and club_id

//when I create the new match, how do i invite a user to play the match?

//would there need to be a field for that? what would it be called?

//how do i know what users are available to invite?

//how do I have the club name on there as well? bc u click on a particular club card

//shoudl skill_level be a boolean??