import './App.css';
import CountriesDetails from './componets/CountriesDetails';
import CountriesList from './componets/CountriesList';
import NavBar from './componets/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
        
          <CountriesList />

          <Routes>
            <Route path="/country/:codigo" element={<CountriesDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
