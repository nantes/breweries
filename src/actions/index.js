import { types } from './types';
import axios from 'axios';

const apiUrl = 'https://api.openbrewerydb.org/breweries'

export const fetchAllBreweriesSuccess = (breweries) => {
  return {
    type: types.FETCH_ALL_BREWERIES,
    breweries
  }
};

export const fetchAllBreweries = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchAllBreweriesSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const filterBreweriesByName = value => {
    return  {
        type: types.FILTER_BREWIERIES_BY_NAME,
        value
    }
  }

export const searchBreweriesByName = value => {
    return {
      type: types.SEARCH_BREWERIES_BY_NAME,
      value
    }
}

