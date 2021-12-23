
import React from 'react'
import { useFetch} from '../hooks/useFetch'
import { useState } from 'react';


export default function Image({
    url = null, 
    name,
    header = null, 
}) {
    const [trigger, setTrigger] = useState(0);
    const fetchdata =  useFetch(url, trigger, header);
    const [isShiny, setShiny] = useState(false);
    
    function dataToString() {
        switch (name) {
          case "Cat":
            return(fetchdata.data.file)
          case "Dog" :
            return(fetchdata.data.url)
          case "Fox":
            return(fetchdata.data.image)
          case "Pokemon (can be shiny)": {
            let random_pokemon = Math.floor(Math.random() * 898);
            let shiny_chance = Math.floor(Math.random() * 4096);
            if(shiny_chance === 1 || random_pokemon === 325) setShiny(true);
            return("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ (isShiny ? "shiny/" : "") + random_pokemon + ".png")
          }
          default:
            break;
        }
      }

    if (fetchdata.loading) return (<p>Loading...</p>);
    if (fetchdata.error && url === null) return (<p>Loading...</p>);
    if (fetchdata.error) return (<p>Something went wrong</p>);
    if (fetchdata.data || (fetchdata.data === null && name === "Pokemon (can be shiny)")) return (
        <div>
            <img src={dataToString()} alt={"Picture of " + name + " not available"}></img>
            <p>{name === "Pokemon (can be shiny)" ? `Counter: ${trigger}` : ""}</p>
            <button  disabled={isShiny} onClick={() => setTrigger(trigger + 1)}>
              {isShiny ? "You have got a shiny!" : `New ${name === "Pokemon (can be shiny)" ? "Pokemon" : name}!`}
            </button>
        </div>
    );
    return (<p>No data yet</p>);
}
