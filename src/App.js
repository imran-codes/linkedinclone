import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed';
import Login from './components/Login';
import Widgets from './components/Widgets';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './Firebase'
import { useDispatch, useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch (
          login ({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photoUrl: authUser.photoURL,
          })
        )
      } else {
        //user is logged out
        dispatch (logout());
      }
    });

    return () => {
      // cleanup
      unsubscribe();
    }
  }, [dispatch])

  
  return (
    <Router>
      <div className="app">
      {!user ? 
              <Login />
             : (
        <>
          <Switch>
              <Route exact path="/">
              <Nav />
              <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
              </div>
              </Route>
          </Switch>

        </>
      )}    
      </div>
    </Router>   
  );
}

export default App;
