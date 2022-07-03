import './App.css';
import WebChat from './pages/AppPage/WebChat';
import Login from './pages/LoginPage/Login';
import NotFound from './pages/NotFoundPage/NotFound';
import { auth } from "./firebase/firebase";
import { login, logout } from './features/users';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

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
    });

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
