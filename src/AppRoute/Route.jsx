import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import MyNavbar from "../component/nav";
import Home from "../pages/Home";



function AppRoute(props) {
    return (
      <Router {...props}>
        <MyNavbar/>
        <Home/>
        
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          
            <Route path="contact" element={<Contact />} />
          
        </Routes> */}
      </Router>
    );
  }
  export default AppRoute;