import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { useParams } from 'react-router-dom'
import { MatchesContext } from '../context/matches'


//need to show available users with which to schedule a match


function NewMatchForm(){
    const [datetime, setDatetime] = useState("2023-09-21T07:30");
    const [skill, setSkill] = useState(false)
    const [phone, setPhone] = useState("")
    const [opponent, setOpponent] = useState("")
    const { id } = useParams()
    const { errors, user } = useContext(UserContext)
    const { onAddMatch } = useContext(MatchesContext)


 const formattedDatetime = (date) => { 

   return date.toLocaleString('en-US', {
          
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
   
    })};
  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("skill", skill)
        onAddMatch({
            datetime: formattedDatetime(datetime),
            skill_level: skill,
            phone: phone,
            club_id: id
        })
    }


    console.log("skill", skill)
      console.log("datetime", typeof(datetime))

//status should be automatically set to pending when match is created
//and then it can change to 'accepted' or 'rejected'
//and when the match is completed it should be set to 'completed'-- vould
//that be auto-set after the date and time of the match passes?


console.log("user.opponents", user.opponents);

  return (
   <>
   <br/>
    Create a new match 🎾
    <br/>
    <form onSubmit={handleSubmit}>
          <br/>
        <label>Date and Time: </label>
        <input 
            type="datetime-local"
            id="datetime"
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
        onChange={(e) => setOpponent(e.target.value)}
        > 
        <option value="">Select a user</option>
          {user.opponents.map((user, index) => (
        <option key={index} value={user.id}>
          {user.name}
          {user.avatar_url ? (
          <img src={user.avatar_url} alt="Opponent avatar"/> 
          ) : null }
          </option>
      ))}
         </select> 
        <br/>
        <br/>
        <label>Skill Level: </label>
        <select
            id="skill_level"
            value={skill ? "intermediate" : "beginner"}
            onChange={(e) => setSkill(e.target.value === "beginner" ? false : true)}
            >
                <option value={"beginner"}>beginner</option>
                <option value={"intermediate"}>intermediate</option>
        </select> 
        <br/>
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

//sender_id, receiver_id, user_id and club_id

//when I create the new match, how do i invite a user to play the match?

//would there need to be a field for that? what would it be called?

//how do i know what users are available to invite?

//how do I have the club name on there as well? bc u click on a particular club card

//shoudl skill_level be a boolean??


//line 109 was prompting "oppoenent" instead of user see below

{/* <label>Choose Opponent:</label>
<select
  id="opponent"
  name="opponent"
  value={opponent}
  onChange={(e) => setOpponent(e.target.value)}
>
  <option value="">Select a user</option>
  {user.opponents.map((opponent, index) => (
    <option key={index} value={opponent.id}>
      {opponent.name}
      {opponent.avatar_url && (
        <img src={opponent.avatar_url} alt="Opponent avatar" />
      )}
    </option>
  ))}
</select> */}