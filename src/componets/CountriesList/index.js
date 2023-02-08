import data from '../../countries.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState(data);

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <>
              <Link
                className="list-group-item list-group-item-action"
                to={`/country/${country.alpha3Code}`}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="bandeiras"
                />
                {country.name.official}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
