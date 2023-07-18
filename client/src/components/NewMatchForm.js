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
        console.log("datetime", datetime);
        console.log("phone", phone);
        const selectedOpponent = user.opponents.find((opponentItem) => opponentItem.id === parseInt(opponent, 10) && opponentItem.id !== user.id);
        const receiverId = selectedOpponent ? selectedOpponent.id : 0;
        
        onAddMatch({
            datetime: formattedDatetime(datetime),
            skill_level: skill === "intermediate",
            phone: phone,
            club_id: id, 
            sender_id: user.id,
            receiver_id: receiverId
        })
    }


    
      console.log("user.opponents", user.opponents);

  
// console.log("receiver_id", typeof(receiver_id))

//status should be automatically set to pending when match is created
//and then it can change to 'accepted' or 'rejected'
//and when the match is completed it should be set to 'completed'-- vould
//that be auto-set after the date and time of the match passes?




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
                {/* {opponent.avatar_url && <img src={opponent.avatar_url} alt="Opponent avatar"/>} */}
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