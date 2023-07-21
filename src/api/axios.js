import axios from 'axios';

const API_BASE_URL = "https://api.unsplash.com";
const accessKey = "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";

const fetchData = async (query, pageNum, options = {}) => {

    const response = await axios.get(
        `${API_BASE_URL}/search/photos?page=${pageNum}&query=${query}&client_id=${accessKey}&per_page=9`,
        options
    );
    
    return response.data;
}

export default fetchData;