import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = ({countriesPromise}) =>{
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) =>{
        console.log('Handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const countryData = use(countriesPromise);
    const country = countryData.countries;
    // console.log(country)
    return(
        <>
            <div>
                <h1>Total Countries in the world: {country.length}</h1>
                <h2>Total visited countries: {visitedCountries.length}</h2>
                <div className="countries">
                    {
                        country.map(country => <Country handleVisitedCountries={handleVisitedCountries}country={country} key={country.cca3.cca3}></Country>)
                    }
                </div>
            </div>
        </>
    )
};


export default Countries