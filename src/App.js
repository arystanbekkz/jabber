import './App.css';
import WebChat from './pages/AppPage/WebChat';
import Login from './pages/LoginPage/Login';
import NotFound from './pages/NotFoundPage/NotFound';
import { auth } from "./firebase/firebase";
import { login, logout, selectUser } from './features/users';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }));
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])


  return (
    
    <div className='App'>
      <Routes>
        <Route path='/chats' element={ <WebChat /> } />
        <Route path='/' element={ <Login /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes> 
    </div>
  )
}

export default App;
