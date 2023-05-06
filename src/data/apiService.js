import axios from 'axios';
import searchParamsStringify from '../utils/searchParamsStringify';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34510807-7acb17c6314b40594d9f36171';

//клас робить HTTP-запит на ресурс і повертає дані (об'єкт)

class PhotoApiService {
    constructor() {
        this.searchQuery = '';
        this.pageNumber = 1;
        this.viewedPhoto = 0;
        this.perPage = 12;
    }

    async fetchPhoto() {    

        const queryString = this.#getPage()
        try {
            const response = await axios.get(queryString);
            const data = await response.data;
            this.#incrementPage();
            this.viewedPhoto += data.hits.length;
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    
            
    #getPage() {
            
        const searchParams = {
            key: API_KEY,
            q: this.searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: this.pageNumber,
            per_page: this.perPage,
        };
        
        const queryString = searchParamsStringify(searchParams);
        return `${BASE_URL}?${queryString}`;

    
    };


    #incrementPage() {
        this.pageNumber += 1;
    }

    resetPage() {
        this.pageNumber = 1;
    }

    resetViewedPhoto() {
        this.viewedPhoto = 0;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}


export default new PhotoApiService();

