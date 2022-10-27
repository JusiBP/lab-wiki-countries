import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countriesL from "./countries.json"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList countries={countriesL}/>} />
        <Route path="/countriesList/:countryId" element={<CountryDetails countries={countriesL}/>} />
      </Routes>
    </div>
  );
}

export default App;
