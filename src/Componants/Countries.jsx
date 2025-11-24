import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countryData = use(countriesPromise);
    const country = countryData.countries;
    return (
        <div>
            <h1>Total counries in the world: {country.length}</h1>
            {
                country.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;