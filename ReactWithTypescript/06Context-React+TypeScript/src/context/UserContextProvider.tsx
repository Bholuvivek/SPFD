import React from "react";
import UserContext from "./UserContext";

interface child{
    children:string
}
interface userDetails{ 
        username:string;
        password:string;
    
}

const UserContextProvider = ( {children} :child) => {
  const [user, setUser] = React.useState<userDetails>(); 

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
      
    </UserContext.Provider>
  );
};

export default UserContextProvider;
