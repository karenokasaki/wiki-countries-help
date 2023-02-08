import { Link, useParams } from 'react-router-dom';
import data from '../../countries.json';
import { useState } from 'react';

function CountriesDetails() {
  const [countries, setCountries] = useState(data);

  const { codigo } = useParams();
  //na descontrução do objeto, é necessário saber EXATAMENTEO O NOME da propriedade que se quer acessar
  // não sei qual é o meu params -> olha no app.js e confere sua rota
  // params tá vindo undefined -> ta esccrevendo o nome errado

  let countryClicked = countries.filter((country) => {
    return country.alpha3Code === codigo;
  })[0];

  function findingName(border) {
    let country = countries.filter((country) => {
      return country.alpha3Code === border;
    })[0];

    return country.name.common;
  }

  return (
    <div class="col-7">
      <h1>{countryClicked.name.official}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryClicked.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryClicked.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryClicked.borders.map((border) => {
                  return (
                    <Link to={`/country/${border}`}>
                      <li>{findingName(border)}</li>
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountriesDetails;

/* 
  - CLICO NO LINK -> me manda para uma url com a informação do alpha3Code ex: http://localhost:3000/country/FRO
  - A URL MUDA -> A minha rota PEGA essa mudança e tenta mostrar ALGUMA COISA nesse endereço
    - http://localhost:3000/country/FRO -> PROCURAR UMA ROTA que bata nesse endereço

    - <Route path="/country/:codigo" element={<CountriesDetails />} />

    - DENTRO do componente CountriesDetails eu posso usar o useParams() -> para SABER qual é o CÓDIGO (PARAMS)

    Usando essa informação do alpha3Code, a gente consegue filtrar array de CONTRIES até achar o país clicado.
*/
