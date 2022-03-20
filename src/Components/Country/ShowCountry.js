import React from "react";
const Country = (props)=>{
    const {name,flags,area,capital,population,subregion} = props?.country;
    return(
        <div className='country'>
            <img src={flags.png} alt="" />
            <div className='mt-5'>
            <h3>Country: {name.common}</h3>
            <h4>Area: {area}</h4>
            <h4>Capital: {capital}</h4>
            <h4>Population: {population}</h4>
            <h4>Subregion Of: {subregion}</h4>
            </div>
        </div>
    )
}
export default Country;