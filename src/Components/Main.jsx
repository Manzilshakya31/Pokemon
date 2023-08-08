import React, { useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import Search from "./Search";
import axios from "axios";
import { useState } from "react";

const Main=()=>{
    const [search,setSearch]=useState('')
    const[pokeData,setPokeData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon");
    const[nextUrl,setNextUrl]=useState();
    const[prevUrl,setPrevUrl]=useState();
    const[pokeDex,setPokeDex]=useState([]);

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        // console.log(res.data.result)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
        // console.log(pokeData)
    }
    // console.log(pokeData,'sdjkfs');

    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result=await axios.get(item.url)
            // console.log(result)
            setPokeData(state=>{
                state=[...state,result.data]
                return state;
            })
        })
    }
    useEffect(()=>{
        pokeFun();
    },[url])
    return(
        <>
        <div className="container">
            <div className="Search">
                <Search setSearch={setSearch}/>
            </div>

            <div className="left-content">
                <Card search={search} pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>

                
            </div>
            {/* <div className="btn-group">
                <button className="btn">Previous</button>
                <button>Next</button>
            </div> */}
            <div className="right-content">
                <Pokeinfo data={pokeDex}/>
            </div>
        </div>
        </>
    )
}

export default Main;