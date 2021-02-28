import React , {createContext, Component} from 'react'
import {auth} from '../firebase'
export const UserContext = createContext({ user: null });
class UserProvider extends Component {
    state = {
      user: null
    };
  
    componentDidMount = () => {
      auth.onAuthStateChanged(userAuth => {
        this.setState({ user: userAuth});
      });
    };
    setUser = (user) => {
      this.setState((prevState) => ({ user }))
    }
    render() {
      const { setUser } = this
      return (
        <UserContext.Provider value={[this.state.user,setUser]}>
          {this.props.children}
        </UserContext.Provider>
      );
    }
  }
  export default UserProvider;