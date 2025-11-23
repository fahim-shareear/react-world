import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countryPromise}) => {
    const countryData = use(countryPromise);
    const country = countryData.countries;
    return (
        <div>
            <h1>The total number of countries in the world is: {country.length}</h1>
            <div className='countries'>
                {
                    country.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries