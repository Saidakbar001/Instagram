import './styles/App.css';
import Home from './routes/home-page/Home';
import Login from './routes/login-page/Login';
import Messenger from './routes/messenger/Messenger';
import Compass from './routes/compass/Compass.js';
import Like from './routes/like/Like';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <Router>
      <div className="app">
        <Switch>
          {
            user ?
            <>
              <Route exact path="/" component={Home}/>
              <Route exact path="/messenger" component={Messenger}/>
              <Route exact path="/compass" component={Compass}/>
              <Route exact path="/like" component={Like}/>
            </>
            : 
            <Login/>
          };
        </Switch>
      </div>
    </Router>
  );
};

export default App;