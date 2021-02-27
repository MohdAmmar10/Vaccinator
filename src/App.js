import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './Container/Home/Home'
import Login from './Container/Login/Login'
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
    <Switch>  
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    </UserProvider>
  );
}

export default App;
