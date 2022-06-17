import React from 'react';
import Header from 'Components/Header';
import 'Styles/routerCountry.scss';
import {Link, useLocation } from 'react-router-dom';
import {RiArrowLeftLine} from 'react-icons/ri';

export default function RouteCountry() {
  
  const location  = useLocation();
  let country = location.state; 
  // let togglethemechange = location.toggleThemeChange;
  console.log(location); 
  
  // country.borders.forEach((i)=>{
  //   console.log(i)
  // })
  // console.log(country);
  let languages = '';
  Object.values(country.languages).forEach((i)=>{
    languages+=i+', ';
  });
  languages = languages.slice(0,-2);
  

  return (
    <main className='container'>
      <Header

      />
      <section className='countryDetail'>
        <Link className='countryDetail-back' to={"/"}>
          <RiArrowLeftLine/> Back
        </Link>
        <article className="countryDetail-card">
          <figure>
            <img src={country.flags.png} alt='Flag country'/>
          </figure>
          <div className="countryDetail-card-info">
            <p>{country.name.common}</p>
            <div className='countryDetail-card-info-prim'>
              <ul>
                <li>Native Name: <span>{Object.entries(country.name.nativeName)[0][1].common}</span></li>
                <li>Population: <span>{country.population.toLocaleString('es-CO')}</span></li>
                <li>Region: <span>{country.region}</span></li>
                <li>Sub Region: <span>{country.subregion}</span></li>
                <li>Capital: <span>{country.capital[0]}</span></li>
              </ul>
            </div>
            <div className='countryDetail-card-info-sec'>
              <ul>
                <li>Top Level Domain: <span>{country.tld[0]}</span></li>
                <li>Currencies: <span>{Object.values(country.currencies)[0].name}</span></li>
                <li>Languages: <span>{languages}</span></li>
              </ul>

            </div>
            <div className='countryDetail-card-info-borders'>
              <p>Border Countries:</p>
              <ul className='countryDetail-card-info-borders-list list'>
              {
                (country.borders) ?
                  country.borders.map((i)=>{
                    return <li>{i}</li>
                  })
                  :
                <p>N/A</p>

              }
              </ul>
            </div>
          </div>
        </article>

      </section>
    </main>
    );

  }