import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

export function useFetch(
  uri, 
  trigger = [], 
  header = null,
  ) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = useCallback(async (uri, header) => {
    try {
      setError();
      setLoading(true);
      if(uri != null){
        const {data} = header == null ? await axios.get(uri) : await axios.get(uri, header);
        setData(data);
      }else {
        setData(null)
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  useEffect(() => {
      fetchData(uri, header);
  }, [uri, fetchData, trigger, header]);

  return {loading, data, error};
}