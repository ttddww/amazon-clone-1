import React, { useContext } from "react";
import Routing from "./Router.jsx";
import { useEffect } from "react";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";
function App() {
  const [{user},dispatch] = useContext(DataContext);
  console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // user logout
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return <Routing />;
}

export default App;
