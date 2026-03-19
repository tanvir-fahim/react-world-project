import React, { useState } from 'react';
import "./Country.css"

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(country);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // if(visited){
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }

        // setVisited(visited ? false : true);

        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className="country">
            <img className='takeSpace' src={country?.flags?.flags?.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}
                {country.area.area > 300000 ? "  Big Country": "  Small Country"}
            </p>
            <button className={`${visited ? "country-visited" : "country-notVisited"}`} onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button className='btn' onClick = {() => {handleVisitedFlags(country?.flags?.flags?.png)}}>Add country flag</button>
        </div>
    );
};

export default Country;