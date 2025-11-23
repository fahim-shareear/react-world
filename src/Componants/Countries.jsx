import React, { use } from 'react';

const Countries = ({countryPromise}) => {
    const countryData = use(countryPromise);
    const country = countryData.countries;
    return (
        <div>
            <h1>The total number of countries in the world is: {country.length}</h1>
        </div>
    );
};

export default Countries