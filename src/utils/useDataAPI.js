import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataAPI = () => {
    const [ data, setData ] = useState({ results: [] });
    const [url, setURL] = useState('https://www.anapioficeandfire.com/api/books?query=Stark');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            
            try {
                const result = await axios.get(url);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        }
        fetchData();
    }, [url]);

    return [ { data, isLoading, isError }, setURL ]
};

export default useDataAPI;