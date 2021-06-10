import React from 'react';
import './App.css';
import Chat from './Chat/Chat.js';
import Header from './Header/Header.js';
import Sidebar from './Sidebar/Sidebar.js';
import Login from './Login/Login.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useStateValue } from './StateProvider/StateProvider';

function App() {
  // const [user, setUser] = useState(null);

  /*
    So here we destruct the state with user which we initially
    set to null 
  */
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
        <>
          {/* Header */}
          <Header />
          <div className="app__body">
            {/* SideBar */}
            <Sidebar />

            <Switch>
              <Route path = "/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>welcome</h1>
              </Route>
            </Switch>
            
          </div>
        </>
        )}
        
      </Router>
      
      
    </div>
  );
}

export default App;
