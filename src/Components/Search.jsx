import React, {useState}from "react";

function Search({setSearch}) {
    
    return (
        <div>
            <form>
                <inputGroup classname="">
                    <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Enter"/>
                </inputGroup>
            </form>
        </div>
    )
}
export default Search;