import React from 'react';

import Home from "./components/Home";
import Aboutus from "./components/Aboutus/aboutus";
import Faqs from "./components/Faq/Faqs";
import ErrorPage from "./components/ErrorPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import SearchFlight from "./components/SearchFlight";
import SignupForm from "./components/SignupForm";
import Booked from "./components/Booked";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />}></Route>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Aboutus" element={<Aboutus />} />
          <Route exact path="/FAQ" element={<Faqs />} />
          {/* <Route exact path="/searchflight" element={<SearchFlight />} /> */}
          <Route exact path="/booked" element={<Booked />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/error" element={<ErrorPage />} />
          {/* <Route path="/FlightsList" element={<FlightList />} /> */}

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
