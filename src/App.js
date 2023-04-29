import { ResetCss } from './styles/resetCss';
import { GlobalStyle } from './styles/GlobalStyle';
import MyRoutes from './Routes/MyRoutes';
import { useState } from 'react';
import UserContext from './contexts/UserContext';
export default function App() {

  const [userData, setUserData] = useState(undefined);
  console.log(userData);
  return (
   <UserContext.Provider value={{userData, setUserData}}>
    <ResetCss />
    <GlobalStyle />
    <MyRoutes />
   </UserContext.Provider>
  );
}
