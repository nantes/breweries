import { types } from '../actions/types'
import breweriesReducer from './breweriesReducer'


describe ('Breweries reducer', () => {

    it('Should return default state', () => {
        const newState = breweriesReducer(undefined,{})
        expect(newState).toEqual([])
    })

    it('Should return new state if receiving type FETCH_ALL_BREWERIES', () => {
        const breweries= [
                {"name": "name1"}, 
                {"name": "name2"}, 
                {"name": "name3"}
            ]
        const newState = breweriesReducer(undefined, {
            type: types.FETCH_ALL_BREWERIES,
            breweries: breweries
        })
        expect(newState.breweries).toEqual(breweries)
    })

    it('Should return new state if receiving type FILTER_BREWIERIES_BY_NAME', () => {
        const value = "a"
        const newStore = {
            breweries : [{name: 'aa'},{name: 'bbb'}]
        }
        const newState = breweriesReducer(newStore, {
            type: types.FILTER_BREWIERIES_BY_NAME,
            value: value
        })
        expect(newState.searchBreweries).toEqual([{name: 'aa'}])
    })
})