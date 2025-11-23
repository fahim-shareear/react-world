import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countryPromise}) => {
    const countryData = use(countryPromise);
    const country = countryData.countries;
    return (
        <div>
            <h1>The total number of countries in the world is: {country.length}</h1>
            {
                country.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries