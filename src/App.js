import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './Container/Home/Home'
import Login from './Container/Login/Login'
import Centers from './Container/Centers/Centers'
import Appoinments from './Container/Appoinments/Appoinments'
import Register from './Container/Register/Register'
import Locations from './Container/Locations/Locations'
import NearByCenters from './Container/NearByCenters/NearByCenters'
import Signout from './Container/Signout/Signout'
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
    <Switch>  
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/appoinments" exact component={Appoinments} />
        <Route path="/centers" exact component={Centers} />
        <Route path="/nearby-centers" exact component={NearByCenters} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/locations" exact component={Locations} />
        
        <Redirect to="/" />
      </Switch>
    </UserProvider>
  );
}

export default App;
