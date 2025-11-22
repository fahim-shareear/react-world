import { use } from "react"

export default function Countries({countriesPromise}){
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries)
    return(
        <>
            <div>
                <h1>In the world {countries.length}</h1>
            </div>
        </>
    )
}