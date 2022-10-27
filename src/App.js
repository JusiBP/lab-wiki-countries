import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countriesL from "./countries.json"

const apiURL = "https://ih-countries-api.herokuapp.com/countries";


function App() {

  const [countriesApi, setCountriesApi] = useState([]);
  // const [waiting, setWaiting] = useState(true);

  useEffect(()=>{
      axios.get(apiURL)
      .then(results=>{
          console.log(results.data);
          setCountriesApi(results.data);
          // setTimeout(()=> {
          //     setWaiting(false);
          // }, 1500);
      })
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList countries={countriesApi}/>} />
        <Route path="/countriesList/:countryId" element={<CountryDetails countries={countriesL}/>} />
      </Routes>
    </div>
  );
}

export default App;
