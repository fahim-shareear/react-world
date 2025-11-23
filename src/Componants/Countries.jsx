import { use } from "react";

const Countries = ({countryPromise}) =>{
    const countryData = use(countryPromise);
    const country = countryData.countries;
    console.log(country);

    return(
        <>
            <div>
                <h1>All the countries in the world: {country.length}</h1>
            </div>
        </>
    )
};

export default Countries