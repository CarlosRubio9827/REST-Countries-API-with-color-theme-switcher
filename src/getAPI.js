import React, {useEffect} from "react";

function useApi (){
    const API = 'https://restcountries.com/v3.1'
    
    const getData = ()=>{
        return new Promise((res, rej)=>{
            let x = fetch(`${API}/all`)
                .then((res) => 
                    res.json()
                )
                .then((data)=>{
                    return data
                });
            res(x)
            rej(new Error('err'));
            }
        )
    }
    const getDataByRegion = (reg)=>{
        return new Promise((res, rej)=>{
            let x = fetch(`${API}/region/${reg}`)
            // let x = fetch(`${API}/region/${reg}`)
                .then((res) => 
                    res.json()
                )
                .then((data)=>{
                    return data
                });
            res(x)
            rej(new Error('err'));
            }
        )
    }
    return(
        {
            getData,
            getDataByRegion
        }
    )

}


export { useApi };