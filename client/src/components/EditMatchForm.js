import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/user'
import { useNavigate, useParams } from 'react-router-dom'
import { MatchesContext } from '../context/matches'

function EditMatchForm() {
    const { id } = useParams()   
    const {user, setUser, errors} = useContext(UserContext)
    const { onEditMatch,formattedDatetime } = useContext(MatchesContext)
    const navigate = useNavigate()

    const obj = {
        datetime: "", 
        skill_level: "", 
        phone: "",
        id: id
    }


    const [myMatch, setMyMatch] = useState(obj)

    useEffect(() => {
        let m = user.matches.find((e) => {        
          return e.id === parseInt(id, 10)})

          const formattedDate = m.datetime.substring(0,16)

          m ? setMyMatch({...m, datetime: formattedDate}) : setMyMatch(obj)
      }, [user, id])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("myMatch", myMatch)
        onEditMatch(myMatch)
    }

    function updateMyMatch(e){
        const { id, value } = e.target;
        setMyMatch({...myMatch, [id]: value})
    }
  
    function handleDelete(e){
        e.preventDefault()
        fetch(`/matches/${id}`, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok){
                let updatedMatches = user.matches.filter((match) => {
                    return match.id != id
                })
                setUser({...user, matches: updatedMatches})
                alert("match deleted!")
                navigate(`/matches`)
            } else {
                console.log("Delete failed. Status:", response.status);
              }
            })
            .catch(error => {
              console.error("Delete error:", error);
            });
          }

    function handleCancelEdit() {
            navigate(`/matches`);
    }

    if (!user){
        return <h3>Please log in to view matches</h3>
    } 
    
    if (myMatch === null) {
        return <p>Loading...</p>
    }

        return ( 
            <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <strong>Edit match</strong>
                <br></br>
                <br></br>
                <label>Datetime: </label>
                    <input 
                        type="datetime-local"
                        id="datetime"
                        value={myMatch.datetime}
                        onChange={updateMyMatch}
                        placeholder="09/21/2023, 7:30"  
                /> <br/>
                   <br/>
                <label>Skill Level: </label>
                    <select
                        id="skill_level"
                        value={myMatch.skill_level}
                        onChange={updateMyMatch}>
                            <option value={""}>select a skill level:</option>
                            <option value={"beginner"}>beginner</option>
                            <option value={"intermediate"}>intermediate</option>
                            <option value={"pro"}>pro</option>
                    </select> <br/>
                <br/>    
                <label>Phone:</label>
                    <input 
                    type="text"
                      id="phone"
                      value={myMatch.phone}
                      onChange={updateMyMatch}
                      placeholder="phone number"
                />
                <br/>
                <br/>
                <br></br>
                <button type="submit">Save edited match</button>
                <br></br>
                <br></br>
                <button type="submit" onClick={handleCancelEdit}>Cancel edit</button>
                <br></br>
                <br></br>
                <button type="submit" onClick={handleDelete}>Delete match</button>
    
                {errors.map((error, index) => (
                <p key={index} className="errors">
                  {error}
                </p>
                ))}
            </form>
        )
    }
export default EditMatchForm