import React, { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyNavbar from './Components/MyNavbar/MyNavbar';
import MyRouter from './Components/MyRouter/MyRouter';

export const UserContext = createContext()

function App() {
  const [loggedInUser , setLoggedInUser] = useState({})

  return (
      <>
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
              <BrowserRouter>
                  <MyRouter></MyRouter>
              </BrowserRouter>
          </UserContext.Provider>
      </>
  );
}

export default App;
