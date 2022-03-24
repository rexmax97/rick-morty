import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import {Home, Contact, Character, Episode} from "../components/pages";
function Routing() {
    return  <Routes>
         
                <Route index path="/" element={<Home />}/>     
                <Route path="/home" element={<Home />}/>                   
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile/:id" element={<Character />} />
                <Route path="/episode/:id" element={<Episode />} />
            </Routes>
}

export default Routing