
import {
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
} from '../actions/fetch-news';

import { news } from '../initialState'


export default (state = news, action: any) => {
    switch (action.type) {
      case FETCH_NEWS_START:
        return {
          ...state,
          loading: true,
          
        };
      case FETCH_NEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case FETCH_NEWS_FAIL:
        return {
          ...state,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
}
