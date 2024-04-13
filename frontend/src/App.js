import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
//   Link
} from "react-router-dom";
import StudentProfile from "./components/StudentProfile";
import GetSubs from "./components/GetSubs";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import SubSwitch from "./components/SubSwitch";
import Faculty from "./components/Faculty";

function App() {
  return (<>
    <Router>
    <Navbar/>
    
    {/* <Link to="/student"> student login</Link><Link to="/admin"> Admin login</Link> */}
    <Routes>
    <Route exact path='/getsub'
          element={<GetSubs/>}>
          </Route>
    <Route exact path='/'
          element={<Home/>}>
          </Route>
    <Route exact path='/faculty'
          element={<Faculty/>}>
          </Route>
    <Route exact path='/login'
          element={<Login/>}>
          </Route>
    <Route exact path='/subpro'
          element={<StudentProfile/>}>
          </Route>
    <Route exact path='/subswt'
          element={<SubSwitch/>}>
          </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;