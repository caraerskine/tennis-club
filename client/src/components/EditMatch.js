import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/user'
import { useNavigate, useParams } from 'react-router-dom'


function EditMatch() {
    const { id } = useParams()   
    const {onEditMatch, user, setUser, errors} = useContext(UserContext)
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
        return e.id == id})

        m ? setMyMatch(m) : setMyMatch(obj)
    }, [user, id])

    const handleSubmit = (e) => {
        e.preventDefault();
        onEditMatch(myMatch)
        console.log(myMatch, "onEditMatch is happening")
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
            }
        })
        
    }

    if (!user){
        return <h3>Please log in to view matches</h3>
    } 
    
    if (myMatch === null) {
        return <p>Loading...</p>
    }
        return ( 
            <form onSubmit={handleSubmit}>
                <h4>Edit match</h4>
                <label>Datetime: </label>
                <input 
                    type="datetime"
                    id="datetime"
                    value={myMatch.datetime}
                    onChange={updateMyMatch}
                    placeholder="MM_DD_YYYY, 2:00 pm"  
                /> <br/>
                   <br/>
                  <label>Skill Level: </label>
                <select
                    id="skill_level"
                    value={myMatch.skill_level}
                    onChange={updateMyMatch}>
                        <option value={"beginner"}>beginner</option>
                        <option value={"intermediate"}>intermediate</option>
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
                <button type="submit">Save edited match</button>
                <button onClick={handleDelete}>Delete match</button>
                
                {errors.map((error, index) => (
                <p key={index} className="errors">
                  {error}
                </p>
                ))}
            </form>
        )
    }
export default EditMatch