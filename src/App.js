import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './Container/Home/Home'
import Login from './Container/Login/Login'
import Appoinments from './Container/Appoinments/Appoinments'
import Register from './Container/Register/Register'
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
    <Switch>  
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/appoinments" exact component={Appoinments} />
        <Redirect to="/" />
      </Switch>
    </UserProvider>
  );
}

export default App;
