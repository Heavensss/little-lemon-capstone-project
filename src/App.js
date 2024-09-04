import { ChakraProvider, Container, Spacer } from "@chakra-ui/react";
import React, { useReducer, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import SpecialSection from "./components/SpecialSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { Testimonials } from "./components/Testimonials";

function App() {
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const initialState = {availableTimes:  fetchAPI(new Date())}
const [state, dispatch] = useReducer(updateTimes, initialState);

function updateTimes(state, date) {
    return {availableTimes: fetchAPI(new Date(date))}
}
const navigate = useNavigate();
function submitForm (formData) {
    if (submitAPI(formData)) {
        navigate("/confirmed")
    }
}

  return (
    <ChakraProvider>
      <AlertProvider>

        <main>
          <Routes>
            <Route path="/" element={<LandingSection />} />
            <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
            <Route path="/confirmed" element={<ConfirmedBooking/> } />
          </Routes>
          <Header />
          <SpecialSection/> 
          <Testimonials/>  
        </main>
          <Footer />
          <Alert/>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
