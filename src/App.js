import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './Container/Home/Home'
import Login from './Container/Login/Login'


function App() {
  return (
    <Switch>  
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
  );
}

export default App;
