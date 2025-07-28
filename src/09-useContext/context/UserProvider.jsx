import React, { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     id:123,
//     name: 'Julio Perez',
//     email: 'julio@gmail.com'
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();



  return (
    // <UserContext.Provider value={{hola: 'Mundo', user }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
