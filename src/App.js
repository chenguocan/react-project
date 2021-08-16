import { Switch, Route , Redirect } from "react-router-dom"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Admin} />
        <Redirect  to='/login' />
      </Switch>
    </div>
  );
}

export default App;
