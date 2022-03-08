import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url);
                
                let data = await res.json();
                setData(data);
               
            } catch (error) {
                res.json(error)
            }
        }
        getData(url);
    }, [url])
    return data;
}