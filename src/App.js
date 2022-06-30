import './App.css';
import WebChat from './pages/AppPage/WebChat';
import Login from './pages/LoginPage/Login';
import { auth, provider } from "./firebase/firebase";
import { login, logout, selectUser } from './features/users';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {

  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({

        }))
      } else {
        dispatch(logout());
      }

      console.log(authUser);

    })
  })

  const user = true;

  return  user ?
  (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <WebChat /> } />
      </Routes>
    </div>
  )
  :
  (
    <div className='App'>
      <Routes>
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  )
}

export default App;
