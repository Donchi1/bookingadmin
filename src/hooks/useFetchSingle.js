
import { useEffect, useState } from "react";
import axios from "axios";

function useFetchSingle(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(url);
          console.log(res)
          setData(res.data.user);
        } catch (err) {
          setError(err);
        }
        setLoading(false);
      };
      fetchData();
    }, [url]);
  
   
  
    return { data, loading, error };
  
}

export default useFetchSingle