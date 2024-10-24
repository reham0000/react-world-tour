import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <div style={{color: visited? 'purple' : 'white'}}>Name: {name.common}</div>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>{handleVisitedCountry(country)}}>Mark Visited</button>
            <button onClick={() => {handleVisitedFlags(country.flags.png)}}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ?'I have visited this Country': 'I want to go'}
        </div>
    );
};

export default Country;