import { React, useContext } from 'react'
import { UserContext } from '../context/user'
import { ClubsContext } from '../context/clubs'
import ClubCard from './ClubCard'

function AllClubs(){

    const { clubs } = useContext(ClubsContext)


    const displayClubs = clubs.map((club) => 
      <ClubCard 
        key={club.id} 
        club_img={club.club_img}
        club_name={club.club_name} 
        street={club.street} 
        description={club.description}
      />
    )

return (
  <div className="App" >
    {displayClubs}
  </div>
  );
}


export default AllClubs;
   