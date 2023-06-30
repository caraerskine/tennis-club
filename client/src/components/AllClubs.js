import React from 'react'
import { useContext } from 'react'
import { ClubsContext } from '../context/clubs'
import ClubCard from './ClubCard'

//need addMatch function in clubs context and import here

function AllClubs() {

    const { clubs } = useContext(ClubsContext)
    const displayClubs = clubs.map((club) => 
      <ClubCard 
        key={club.id} 
        club_name={club.club_name} 
        street={club.street} 
        description={club.description}
      />
    )

return (
  <>
   {displayClubs}
  </>
  )
}
    // if (!user){
    //     return <h3>Please login to view clubs.</h3>
    // } else {
    //     return (
    //         <>
    //         <Link to='/clubs'>
    //           <br></br>
    //             <div>
    //               <h3>Create a new club</h3>
    //             </div>
    //           <br></br>
    //         </Link> 
    //         </>
    //   )
    // }
  

export default AllClubs

//took <MyCourt /> our refer to bball

//put in club card
// {clubs.map(club => (
//   <div key={club.id}>
//     🎾 🎾 🎾 
//     <h1>{club.club_name}</h1>
//     <h2>{club.street}</h2>
//     <p>{club.description}</p>
//   </div>
// ))}