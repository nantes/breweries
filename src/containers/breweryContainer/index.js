import React from 'react';
import BreweryList from '../../components/breweryList'
import { connect } from 'react-redux';
import propTypes from 'prop-types'

class BreweryContainer extends React.Component {

  constructor(props) 
  {
    return super(props)
  }
  

  render() {
    return ( 
             <div data-test="breweryContainer">
                <BreweryList breweries={this.props.searchBreweries} />
              </div>
           )
  }


}

BreweryContainer.propTypes = {
  breweries: propTypes.object
}

const mapStateToProps = (state) => {
  return { 
    searchBreweries: state.searchBreweries
  };
};

export default connect(mapStateToProps)(BreweryContainer);