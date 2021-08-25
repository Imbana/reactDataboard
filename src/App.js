import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import PageHome from "./pages/PageHome"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";



function App() {
  return (
    <div className="app">
      <Router>
        <Topbar></Topbar>
        <div className="containerApp">
          <Sidebar></Sidebar>
          <Switch>
            <Route exact path="/">
              <PageHome></PageHome>
            </Route>
            <Route path="/users">
              <UserList></UserList>
            </Route>
            <Route path="/user/:userId">
              <User></User>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
