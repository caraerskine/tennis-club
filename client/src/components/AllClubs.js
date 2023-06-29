import React from 'react'
import { Link } from 'react-router-dom' 
import { useContext } from 'react'
import { UserContext } from '../context/user'
// import { ClubsContext } from '../context/clubs'

const AllClubs = () => {
    const { user } = useContext(UserContext)

    if (!user){
        return <h3>Please login to view clubs.</h3>
    } else {
        return (
            <>
            <Link to='/clubs'>
              <br></br>
                <div>
                  <h3>Create a new club</h3>
                </div>
              <br></br>
            </Link> 
            </>
      )
    }
  }

export default AllClubs

//took <MyCourt /> our refer to bball