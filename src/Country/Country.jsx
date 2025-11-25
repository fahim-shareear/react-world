import { useState } from "react";
import './Country.css'

const Country = ({country, handleVisitedCountries}) =>{
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return(
        <>
            <div className={`country ${visited && 'country_visited'}`}>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                <h1>Name: {country.name.common}</h1>
                <h1>Official Name: {country.name.official}</h1>
                <h1>Capital: {country.capital.capital}</h1>
                <p>Area: {country.area.area}{country.area.area > 10000000 ? " Large country" : " Small Country"}</p>
                <p>Populaton: {country.population.population}{country.population.population > 10000000 ? " Densely populated country" : " "}</p>
                <p>Region: {country.region.region}</p>
                <p>Continent: {country.continents.continents}</p>
                <button onClick={handleVisited}>{!visited ? "Not Visited" : "Visited"}</button>
            </div>
        </>
    )
};

export default Country