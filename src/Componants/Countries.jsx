import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = ({countriesPromise}) =>{
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    const handleVisitedCountries = (country) =>{
        // console.log('Handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlas = (flags) =>{
        // console.log(console.log('flag needs to be added', flags));
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }

    const countryData = use(countriesPromise);
    const country = countryData.countries;
    // console.log(country)


    return(
        <>
            <div>
                <h1>Total Countries in the world: {country.length}</h1>
                <h2>You & I visited countries: {visitedCountries.length}</h2>
                <h3>Total visited flags: {visitedFlags.length}</h3>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                    }
                </ol>
                <div className="visited-flags-container">
                    {visitedFlags.map((flag, index)=> <img src={flag} key={index}></img>)}
                </div>
                <div className="countries">
                    {
                        country.map(country => <Country 
                            handleVisitedCountries={handleVisitedCountries}country={country} 
                            key={country.cca3.cca3}
                            handleVisitedFlas={handleVisitedFlas}></Country>)
                    }
                </div>
            </div>
        </>
    )
};


export default Countries