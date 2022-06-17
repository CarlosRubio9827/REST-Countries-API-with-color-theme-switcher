import React,{useState, useEffect, useRef}from 'react';
import 'Styles/search.scss';
import { BsSearch, BsMoonFill } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Search = (props)=>{

    const [menuRegion, setMenuRegion] = useState(false);

    const getInput1 = (evt)=>{
        props.getInput2(evt.target.value)
        // console.log()
    }

    const filterByRegion2 = (evt)=>{
        let textRegion = evt.target.innerText.toLowerCase().slice(0,3);
        filterElement.current.innerText = evt.target.innerText;
        props.filterByRegion(textRegion);
        inputElement.current.value = "";
        // console.log(inputElement.current.value);


    }

    const filterElement = useRef(null)
    const inputElement = useRef(null)
    // let finalObject = Object.entries(props.obj.timeframes);
    useEffect(() => {
        // console.log(filterElement.current);
        // console.log(elementVariable.current), []

    } );



    return (
            <section className="search">
                
                <form method="GET" action='#' className="search-form">
                    <div className="search-form-top">
                        <BsSearch className="search-form-top-icon"/>
                        <input ref={inputElement} onInput={getInput1} type="text" placeholder="Search for a country..."/>
                    </div>

                    <div className='search-form-bottom' onClick={()=>{
                        setMenuRegion(menuRegion?false:true)
                            // console.log(menuRegion);
                            }
                    }>
                        <a ref={filterElement}>Filter by Region</a>
                        <MdKeyboardArrowDown className="search-form-bottom-icon"/>
                        {
                            (!menuRegion)?
                                null
                            :
                            <ul className="search-form-bottom-ul">
                                <li value="africa" onClick={filterByRegion2}>Africa</li>
                                <li value="america" onClick={filterByRegion2}>America</li>
                                <li value="asia" onClick={filterByRegion2}>Asia</li>
                                <li value="europe" onClick={filterByRegion2}>Europe</li>
                                <li value="oceania" onClick={filterByRegion2}>Oceania</li>
                            </ul>
                        }
                    </div>
                    
                </form>

            </section>
        )
}

export default Search;