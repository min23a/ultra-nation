import { createContext, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';

export const countryContext = createContext();

function App() {
  const [Countries,setCountries] = useState([]);
  useEffect(()=>{
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div className="App">
      <countryContext.Provider value={[Countries, setCountries]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
            <Route path="/details/:nameKey">
            <CountryDetails/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
      </countryContext.Provider>
    </div>
  );
}

export default App;
