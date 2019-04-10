import { types } from '../actions/types'
import { } from '../actions/types'
import selectorBreweries from '../selectors/breweries'

//const initialState = {breweries: [], value: '', searchBreweries: []};

export default function breweryReducer(state = [], action) {
  switch (action.type) {
        case types.FETCH_ALL_BREWERIES: 
        return {
          ...state,
          breweries: [...action.breweries ]
          }
      case types.FILTER_BREWIERIES_BY_NAME:{
        const {value} = action;
        const searchBreweries = selectorBreweries(state.breweries , value)

        return {
          ...state, 
          value, 
          searchBreweries : [...searchBreweries]};
      }
      case types.SEARCH_BREWERIES_BY_NAME: {
        const {value} = action;
        return {
          ...state,
          value
        }
      }
      case types.SEARCH_BREWERIES_BY_NAME_SUCCESS: {
        return {
          ...state,
          searchBreweries: action.json
        }
      }
    default:
      return state;
  }
}