import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log("Handle visited country cliked", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        // console.log("Flags need to add.", flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h4>Country Flags: {visitedFlags.length}</h4>
            <ol>
                {visitedCountries.map(country => <li key={country.ccn3.ccn3}> {country.name.common} </li>)}
            </ol>
            <div className='visited-flag-container'>
                {
                    visitedFlags.map((flag, index) => {
                      return <img key={index} src={flag} alt="" />
                    })
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country country = {country} key={country.ccn3.ccn3} handleVisitedCountries = {handleVisitedCountries}
                    handleVisitedFlags = {handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;