import React, { Fragment, useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { useParams } from 'react-router-dom'
import { MatchesContext } from '../context/matches'


function NewMatchForm(){

    const [datetime, setDatetime] = useState("2023-09-21T07:30");
    const [skill, setSkill] = useState(false)
    const [phone, setPhone] = useState("")
    const [opponent, setOpponent] = useState("")
    const { id } = useParams()
    const { errors, user } = useContext(UserContext)
    const { onAddMatch, formattedDatetime } = useContext(MatchesContext)

    // "yyyy-MM-ddThh:mm" 

    if (!user) {
      return (
        <>
          <p><strong>Please Login to add a match to a club!</strong></p>
        </>
      );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const selectedOpponent = user.opponents.find((opponentItem) => opponentItem.id === parseInt(opponent, 10) && opponentItem.id !== user.id);
        const receiverId = selectedOpponent ? selectedOpponent.id : 0;

        onAddMatch({
            datetime: formattedDatetime(datetime),
            skill_level: skill,
            phone: phone,
            club_id: id, 
            sender_id: user.id,
            receiver_id: receiverId
        })
    }

  return (
   <>
   <br/>
    <strong>Create a new match 🎾</strong>
    <br/>
    <form onSubmit={handleSubmit}>
          <br/>
        <label>Date and Time: </label>
        <input 
            type="datetime-local"
            id="datetime"
            placeholder="Type in here…"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
        /> 
        <br/>
        <br/>
        <label>Choose Opponent:</label>
        <select 
          id="opponent" 
          name="opponent" 
          value={opponent} 
          onChange={(e) => setOpponent(parseInt(e.target.value, 10))}
        > 
        <option value="">Select an opponent</option>
          {user.opponents && 
          user.opponents.map((opponent) => (
            <Fragment key={opponent.id}>
              <option value={opponent.id}>
                {opponent.name}
              </option>
           </Fragment>
      ))}
        </select>
        <br />
        <br />
        <label>Skill Level: </label>
        <select
            id="skill_level"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}>              
              <option value={""}>select a skill level:</option>
              <option value={"beginner"}>beginner</option>
              <option value={"intermediate"}>intermediate</option>
              <option value={"pro"}>pro</option>
        </select>
        <br/>
        <br/>
        <label>Phone Number: </label>
        <input 
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="555-555-5555…"
        />  
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

export default NewMatchForm

