import React from 'react'
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Joke({
    name,
    url,
    header = null,
  }) {
    const [trigger, setTrigger] = useState(1);
    const fetchdata = useFetch(url, trigger, header);

    function dataToString() {
        switch (name) {
          case "Chuck Norris Jokes":
            return(fetchdata.data.value);
        default:
            break;
        }
      }
      
    if (fetchdata.loading) return (<p>Loading...</p>);
    if (fetchdata.error) return (<p>Something went wrong</p>);
    if (fetchdata.data) return (
        <div>
            <h2>{name}</h2>
            <p className="fact-p">{dataToString()}</p>
            <button onClick={() => setTrigger(trigger + 1)}>
                New {name} Joke!
            </button>
        </div>
    );

    return (<p>No data yet.</p>)
}
