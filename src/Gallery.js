import { useState } from 'react';
import './Gallery.css';
import useData from './hooks/useData';
import Image from './Image';
import InfiniteScroll from 'react-infinite-scroll-component';

const Gallery = () => {
    const [query, setQuery] = useState('cat');
    const [inputVal, setInputVal] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const { data, isLoading, error, hasMore } = useData(query, pageNumber);

    const handleSubmit = (e) => {
        e.preventDefault();

        // set pageNumber to 1 for new query
        setPageNumber(1);

        // update new query to trigger useEffect for new search
        setQuery(inputVal);

        // clear input value
        setInputVal('');
    }

    const handleChange = (e) => {
        setInputVal(e.target.value);
    }

    const handlePage = () => {
        // update to next page to trigger useEffect to fetch more images
        setPageNumber(prev => prev + 1)
    }
    const Content = () => {
        // array of images for column
        const col1Imgs = [];
        const col2Imgs = [];
        const col3Imgs = [];
        // columns of images
        const column1 = (<div id={`col-${1}`} className={`Gallery-library-column`}>{col1Imgs}</div>);
        const column2 = (<div id={`col-${2}`} className={`Gallery-library-column`}>{col2Imgs}</div>);
        const column3 = (<div id={`col-${3}`} className={`Gallery-library-column`}>{col3Imgs}</div>);

        const imgLibrary = (
            <div className='Gallery-library'>
                {column1}
                {column2}
                {column3}
            </div>
        );

        data.forEach((el, index) => {
            if(el.col_id === 1){
                col1Imgs.push(<Image key ={index} url={el.url} alt={el.dec} />);
            } else if(el.col_id === 2){
                col2Imgs.push(<Image key ={index} url={el.url} alt={el.dec} />);
            } else if(el.col_id === 3){
                col3Imgs.push(<Image key ={index} url={el.url} alt={el.dec} />);
            }
        });

        return imgLibrary;
    }
    return (
        <div className="Gallery">
            <div className='Gallery-header'>
                <span>React <span className='hl'>Infinite</span> Scroll</span>
                <form className='Gallery-search-form' onSubmit={handleSubmit}>
                    <input className='Gallery-search' name='Gallery-search' value={inputVal} onChange={handleChange} /> 
                </form>
                <img src="/img_gallery.svg" alt='logo'/>
            </div>
            {
                <InfiniteScroll dataLength={data} next={handlePage} hasMore={hasMore} >
                    {<Content />} 
                </InfiniteScroll>
            }
           
           {isLoading && <div className='Gallery-loading'></div>}
           {!hasMore && <div className='Gallery-error-msg'>End of Results</div>}
        </div>
    )
}

export default Gallery;