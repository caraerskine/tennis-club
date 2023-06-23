import React, { useState, useEffect, useParams } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    //have a clubs context and a match context?
    //what would go in these? any fns related to each
    //separate concerns

    //user
    //fetchUser fn w/error handling
    //get for user

    //clubs
    //setClubs

    //match
    //editMatch
    //addNewMatch


    return (
        <UserContext.Provider
          value={{
            // user,
            // setUser,
            // fetchUser,
            // signUpError,
            // loginError,
            // logout,
            // editMatch,
            // errors,
            // addMatch,
            // courts,
            // setClubs
          }}
        >
          {children}
        </UserContext.Provider>
      );
}

export { UserContext, UserProvider };