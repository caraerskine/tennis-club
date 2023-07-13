import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/user'
import { useNavigate, useParams } from 'react-router-dom'
import { MatchesContext } from '../context/matches'


function EditMatchForm() {
    const { id } = useParams()   
    const {user, setUser, errors} = useContext(UserContext)
    const { onEditMatch } = useContext(MatchesContext)
    const navigate = useNavigate()

    const obj = {
        datetime: "", 
        skill_level: "", 
        phone: "",
        id: id
    }
    
    console.log("the id", typeof(id))
    console.log("the obj", obj)

    const [myMatch, setMyMatch] = useState(obj)

    useEffect(() => {
        let m;
        if (Array.isArray(user.matches)) {
      m = user.matches.find((e) => {
        return e.id === parseInt(id, 10)
    })};
      
        m ? setMyMatch(m) : setMyMatch(obj);
    }, [user, id]);

    console.log("m", typeof(m))

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
                <p>Edit match</p>
                {/* <label>Datetime: </label> */}
                <input 
                    type="datetime-local"
                    id="datetime"
                    value={myMatch.datetime}
                    onChange={updateMyMatch}
                    placeholder="09/21/2023, 7:30"  
                /> <br/>
                   <br/>
                  {/* <label>Skill Level: </label> */}
                <select
                    id="skill_level"
                    value={myMatch.skill_level || ''}
                    onChange={updateMyMatch}>
                        <option value={"beginner"}>beginner</option>
                        <option value={"intermediate"}>intermediate</option>
                </select> <br/>
                <br/>    
                {/* <label>Phone:</label> */}
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
export default EditMatchForm