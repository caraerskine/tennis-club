import { React, useContext } from 'react'
import { ClubsContext } from '../context/clubs'
import ClubCard from './ClubCard'

function AllClubs(){

    const { clubs } = useContext(ClubsContext)

    console.log("clubs", clubs)

  
    const displayClubs = clubs.map((club) => 
      <ClubCard 
        key={club.id} 
        id={club.id}
        club_img={club.club_img}
        club_name={club.club_name} 
        street={club.street} 
        description={club.description}
      />
    )

    console.log("dispClubs", displayClubs)

return (
  <div className="App" >
    {displayClubs}
  </div>
  );
}


export default AllClubs;
   