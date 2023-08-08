import React from "react";

const Pokeinfo = ({ data }) => {
    // console.log(data?.abilities,'fghghfhg');
    return (
        
                (!data.abilities) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt=""/> */}
                        <img src={data.sprites.front_default6} alt="" height="200px"/>
                        <div className="abilities">
                            <div className="group">                                
                                <h2>{data?.abilities[0]?.ability?.name}</h2>
                            </div>
                            <div className="group">
                                <h2>{data?.abilities[1]?.ability?.name}</h2>
                            </div>
                        </div>
                        <div className="base-stat">
                            {/* <h3>Hp: 30{data.name}</h3> */}
                            <h3>Hp: {data.stats[0].base_stat}</h3>
                            <h3>Attack: {data.stats[1].base_stat}</h3>
                            <h3>Defence: {data.stats[2].base_stat}</h3>
                            <h3>Special-attack: {data.stats[3].base_stat}</h3>
                            <h3>Speed: {data.stats[4].base_stat}</h3>
                        </div>
                    </>
                
            

                )
    )
}
export default Pokeinfo;