import React, { useEffect, useState } from 'react';
import Country from '../Country/ShowCountry';
import './Countries.css'
const Countries = () => {
    const [countries,setcountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])
    return (
        <div>
            <h1 className='title'>Total Country: {countries.length}</h1>
            <div className='countries row'>
           
                 {
                      countries.map(country=><Country country={country} key={country.cca3}></Country>)
            
                    }
            
        </div>
        </div>
        
    );
};

export default Countries;