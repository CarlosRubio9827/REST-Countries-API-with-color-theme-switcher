import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import 'Styles/main.scss';
import Header from 'Components/Header';
import Search from 'Components/Search';
import Country from 'Components/Country';
import {useApi} from './getAPI';
// import { createPortal } from "react-dom/cjs/react-dom.production.min";

const App =()=>{
    
    const {getData, getDataByRegion} = useApi();
    // example()
    const [listCountry, setListCountry] =  useState([]);
    const [allCountry, setAllCountry] =  useState([]);
    const [notFound, setNotFound] =  useState(false);

    const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
    

    // ? document.getElementsByTagName("HTML")[0].setAttribute('data-theme', 'dark')
    // : document.getElementsByTagName("HTML")[0].setAttribute('data-theme', '')

    useEffect(() => {
        getData()
            .then((res)=>{
                setAllCountry(res)
                setListCountry(res.slice(0,8))
                // console.log(listCountry);
            })
            // y();
        document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme"));        
    }, [checked]);

    const toggleThemeChange = () => {
    if (checked === false) {
        localStorage.setItem("theme", "dark");
        setChecked(true);
    } else {
        localStorage.setItem("theme", "light");
        setChecked(false);
        }
    };


    // useEffect(()=>{
    //     },[])
    // console.log(allCountry[113]);
    // const example = ()=>{
    //     const randmInt = Math.floor(Math.random() * 240) + 1;
    //     console.log(randmInt);
    //     setListCountry(allCountry.slice(randmInt,randmInt + 10))
    // }
    
    const getInput2 = (textInput)=>{

        const res = allCountry.filter(i=>{
            return (i.name.common.toLowerCase().includes(textInput.toLowerCase()))
        })
        
        setListCountry(res.slice(0,8));
        if(res.length==0){
            if(!notFound){
                setNotFound(notFound=>!notFound)
            }
        };

    }

    const filterByRegion  = async (textRegion)=>{
        // console.log(textRegion);
        // console.log(allCountry);
        await getDataByRegion(textRegion)
            .then(res=> {
                setAllCountry(res);
                setListCountry(res.slice(0,8));
            })
            .catch(err => err);
        // console.log(x)
        // setAllCountry(x=>x);
        // return x;
    }

    // filterByRegion()



    return(
        <main className="main">
            {/* <div onClick={toggleThemeChange}>
                Ejemplo 
            </div> */}

            <Header 
                toggleThemeChange={toggleThemeChange}
            />
            {/* <Link to={"/country/12334"}>Invoices</Link> */}
            <Search
                filterByRegion={filterByRegion}
                getInput2={getInput2}
            />
            {/* <div className="example">
                <a onClick={ example }>
                    Example
                </a>
            </div> */}
            <div className="main-country">
                {
                    (listCountry.length>0)?
                    listCountry.map((obj, j)=>{
                        return (
                            
                        <Link 
                            to={`country/${obj.altSpellings[0]}`}
                            key={obj.altSpellings[0]}
                            state={obj}
                            // togglethemechange={toggleThemeChange}
                        >
                            <Country
                                obj={obj}
                                key={j}
                                
                            />
                        </Link>
                        )
                    })
                    
                    :
                    (notFound)?
                    <div className="main-country-notFound">
                        <p>No results found!!!</p>
                    </div>
                    :
                    <div className="main-spin">
                    
                    </div>
                }
            </div>
            
            {
                (!notFound || listCountry.length>0)?
                    <div className="main-message">
                        <p>Only {listCountry.length} Results Are Displayed!</p>
                    </div>
                    :
                    null
            }

        </main>
        )
}
export default App;