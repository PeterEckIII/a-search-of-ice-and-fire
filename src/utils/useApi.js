import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = startingUrl => {
    const [ data, setData ] = useState({ results: [] });
    const [ url, setURL ] = useState(startingUrl);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(url);
                setData({ results: result.data[ 0 ] });
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        }
        fetchData();
    }, [ url ]);

    return [ { data, isLoading, isError }, setURL ]
};

export default useApi;
