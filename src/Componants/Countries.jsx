import { use } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = ({countriesPromise}) =>{
    const countryData = use(countriesPromise);
    const country = countryData.countries;
    // console.log(country)
    return(
        <>
            <div>
                <h1>Total Countries in the world: {country.length}</h1>
                <div className="countries">
                    {
                        country.map(country => <Country country={country} key={country.cca3.cca3}></Country>)
                    }
                </div>
            </div>
        </>
    )
};


export default Countries