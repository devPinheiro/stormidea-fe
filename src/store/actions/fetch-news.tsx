
import axios from '../Axios';
import { toast } from 'react-toastify';

// action types
export const FETCH_NEWS_START = 'FETCH_NEWS_START'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAIL = 'FETCH_NEWS_FAIL'

export const fetchNewsStart = () => {
  return { type: FETCH_NEWS_START };
};

// action creators for success
export const fetchNews = (payload: any) => {
  return { type: FETCH_NEWS_SUCCESS, payload };
};

export const fetchNewsError = (error: any) => {
  return { type: FETCH_NEWS_FAIL, payload: error };
};

export const fetchNewsRequest = (category: string = 'business', pageSize: number = 10)  => {
  
  return async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  dispatch(fetchNewsStart())
    try {
      const response = await axios.get(
        `top-headlines?category=${category}&pageSize=${pageSize}`
      );
      if (response.status === 200) {
        const { data } = response;
        dispatch(fetchNews(data));
      }
    } catch (error: any) {

        if(error.response && error.response.data){
          const { message } = error.response.data

        toast.error(message);
     
      dispatch(fetchNewsError(message));
        } 
        
    }
  }
};