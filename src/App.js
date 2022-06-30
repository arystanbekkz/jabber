import './App.css';
import WebChat from './pages/AppPage/WebChat';
import Login from './pages/LoginPage/Login';
import { auth, provider } from "./firebase/firebase";
import { login, logout, selectUser } from './features/users';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }))
      } else {
        dispatch(logout());
      }

      console.log(authUser);

    })
  }, [dispatch])


  return (
    <div className='App'>
      <Routes>
        {user ?
          <Route path='/' element={ <WebChat /> } />

          :
          <Route path='/' element={ <Login /> } />
        }
      </Routes>
    </div>
  )
}

export default App;
