import React , {useState}  from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import { BrowserRouter,  Route,   Routes, } from "react-router-dom";
import SingleProduct from './pages/SingleProduct';
import Home from './pages/Home';
import Admin from './admin/Admin';
import Users from './admin/pages/Users';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SingleRoom from './pages/SingleRoom';
import SingleBuilding from './pages/SingleBuilding';

const App = () => {



  return (

    <AppProvider>

<BrowserRouter>
     

          <Routes>


            
              <Route
                path="/"
                element={
                  <Home />
                }
              />

            
              <Route
                path="/services"
                element={
                  <Services />
                }
              />
            
              <Route
                path="/about"
                element={
                  <AboutUs />
                }
              />
            
              <Route
                path="/contact"
                element={
                  <Contact />
                }
              />
            
         
            
              <Route
                path="/buildings/:building"
                element={
                  <SingleBuilding />
                }
              />
            
              <Route
                path="/buildings/:building/:room"
                element={
                  <SingleRoom />
                }
              />
         
         
        
            
           
          </Routes>

       

          <Routes>

    <Route
      
      path="/dashboard"
      element={
        <Admin  />
      }
    />

  

    <Route
      
      path="/dashboard/users"
      element={
        <Users  />
      }
    />



      </Routes>

       
        </BrowserRouter>


   
 


    </AppProvider>
  )
}

export default App