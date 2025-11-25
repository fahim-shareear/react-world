import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) =>{
        console.log('handle visited country clicked', country);
        const newVisited = [...visitedCountries, country];
        setVisitedCountries(newVisited);
    }
    const countryData = use(countriesPromise);
    const country = countryData.countries;
    return (
        <div>
            <h1>Total counries in the world: {country.length}</h1>
            <h3>Total country visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                country.map(country => <Country key={country.cca3.cca3} country={country} 
                    handleVisitedCountries = {handleVisitedCountries}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;