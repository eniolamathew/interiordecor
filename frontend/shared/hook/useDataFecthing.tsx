import { useEffect, useState } from 'react';


const useDataFetching = (fetchFunction: () => void, dependencies:any[] = []) => {
    const [data, setData] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try { 
        const result = await fetchFunction();
        setData(result);
      } catch (error) { setError(error as Error) 
      } finally { 
        setIsLoading(false) 
      }
    };

    fetchData();

    return () => { };

  }, dependencies);

  return { data, isLoading, error };
};

export default useDataFetching