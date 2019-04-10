import React from 'react';
import Brewery from '../brewery'
import propTypes from 'prop-types'

class BreweryList extends React.Component {

  render() {
    return (
        <ul data-test="breweryList">
            {   this.props.breweries
                ?   this.props.breweries.map(brewery => (
                        <Brewery  key={brewery.id} brewery={brewery}></Brewery>))
                :   <span>none</span>

            }
        </ul>
    )
  }
}

BreweryList.propTypes = {
  breweries: propTypes.array
}

export default BreweryList