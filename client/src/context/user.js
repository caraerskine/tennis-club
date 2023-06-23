import React, { useState, useEffect, useParams } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {


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