import React, { useState } from "react";
import Search from "./Search";

const Card = ({ pokemon, loading, infoPokemon, search}) => {
    console.log(pokemon);
    return (
        <>
            {
                // loading ? <h1>loading...</h1> :
                pokemon
                    .filter((items) => {
                        return search.toLowerCase() === '' ? items : items.name.toLowerCase().includes(search);
                    })
                    .map((item) => {
                        console.log(item, 'items');
                        console.log(item.name, 'name');

                        //Key for unique identification
                        return (
                            <>
                                <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                    <h2>{item.id}</h2>
                                    <img src={item.sprites.front_default} alt="" height="80px" />
                                    <h2>{item.name}</h2>
                                </div>
                            </>
                        )
                    })
            }

        </>
    )
}
export default Card;

