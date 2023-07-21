import { useState, useEffect } from "react";
import fetchData from "../api/axios";

const useData = (query, pageNumber) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setData([]);
        setHasMore(true);
    }, [query])

    useEffect(() => {
        setIsLoading(true);
        setError({});

        let controller = new AbortController();
        let { signal } = controller;

        fetchData(query, pageNumber, { signal })
            .then(data => {
                
                // check if last page reached
                if(pageNumber === data.total_pages) {
                    setHasMore(false);
                }

                setData(prevData => {
                    // assign column_id to image, for layout
                    let num = 0;

                    const getId = () => {
                        num = num >= 3 ? 1 : num + 1;
            
                        return num;
                    }  
                    // update data with only necessary info
                    return [...prevData, ...data.results.map((el) => 
                        ({
                            id: el.id, 
                            desc: el.alt_description,
                            col_id: getId(),
                            url: el.urls.regular
                        })
                    )]
                });

                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);

                if(signal.aborted) return;

                setError({ message: err.message});
            })

        return () => controller.abort();

    }, [query, pageNumber]);

    return { data, isLoading, error, hasMore };
}

export default useData;