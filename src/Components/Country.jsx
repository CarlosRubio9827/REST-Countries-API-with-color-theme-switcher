import React from "react";
import 'Styles/country.scss';

const Country  = (props)=>{
    // console.log(props)
    // console.log(props);
    // console.log(props.obj.population.toLocaleString('es-CO'));
    return (
        <section className="country">
            <figure>
                <img src={props.obj.flags.png} alt="Flag of country"/>
            </figure>
            <article className="country-info">
                <p>
                    {props.obj.name.common}
                </p>
                <ul>
                    <li>Population: <span>{props.obj.population.toLocaleString('es-CO')}</span></li>
                    <li>Region: <span>{props.obj.region}</span></li>
                    <li>Capital: <span>{(props.obj.capital)?(props.obj.capital):'N/A'}</span></li>
                </ul>
            </article>
        </section>
    );
}


export default Country;