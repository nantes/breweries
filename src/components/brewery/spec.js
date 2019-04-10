import React from 'react'
import { shallow } from 'enzyme'
import Brewery from './index' 
import {findByTestAttr, checkProps} from "../../utils/index"

describe( 'Brewery Component', () =>{
    
    let component
    beforeEach(() => {
        component = shallow(<Brewery  />)
    })
    
    it('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'brewery')
        expect(wrapper.length).toBe(1)
    })

    describe('Component Renders with props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                brewery:   {
                    id: 299,
                    name: "Almanac Beer Company",
                    brewery_type: "micro",
                    street: "651B W Tower Ave",
                    city: "Alameda",
                    state: "California",
                    postal_code: "94501-5047",
                    country: "United States",
                    longitude: "-122.306283180899",
                    latitude: "37.7834497667258",
                    phone: "4159326531",
                    website_url: "http://almanacbeer.com",
                    updated_at: "2018-08-23T23:24:11.758Z",
                    tag_list: []
                  }
            }
            wrapper = shallow(<Brewery {...props} />);
        });

        it('Should renders without error', () => {
            const component = findByTestAttr(wrapper, 'brewery');
            expect(component.length).toBe(1);
        })

    })

    describe('Component Renders without props', () => {

        it('Should renders without error', () => {
            const wrapper = findByTestAttr(component, 'brewery');
            expect(wrapper.length).toBe(1);
        })

    })
})

