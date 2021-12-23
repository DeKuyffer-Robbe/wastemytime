import React from 'react'
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Facts({
  name,
  url,
  header = null,
}) {
  const [trigger, setTrigger] = useState(1);
  const fetchdata = useFetch(url, trigger, header);

  function dataToString() {
      switch (name) {
        case "Cat":
          return(fetchdata.data.text)
        case "Random":
          return(fetchdata.data[0].fact)
        default:
          break;
      }
    }

  if (fetchdata.loading) return (<p>Loading...</p>);
  if (fetchdata.error && url == null) return (<p>Something went wrong</p>);
  if (fetchdata.error) return (<p>Something went wrong</p>);
  if (fetchdata.data) return (
    <div>
      <p className="fact-p">{dataToString()}</p>
      <button onClick={() => setTrigger(trigger + 1)}>
        New {name} Fact!
      </button>
    </div>
  );
  return (<p>No data yet</p>);
}
