import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterBreweriesByName, searchBreweriesByName} from '../../actions';

class Search extends React.Component {
  render() {
    const {filterBreweriesByName,searchBreweriesByName, value} = this.props;

    return (
      <div data-test="search">
        {this.props.withSagas ?  ( 
          <div><h3>Search with Sagas</h3>
          <input
            id="search"
            placeholder = "search any beer name"
            onChange={(e) => searchBreweriesByName(e.target.value)}
            value={value} /></div>
        ) : (
          <div><h3>Search with filters (beers already fetched)</h3>
          <input
            id="search"
            placeholder = "search any beer name"
            onChange={(e) => filterBreweriesByName(e.target.value)}
            value={value} /></div>
        )}
        </div>

    )
  }
} 

function mapStateToProps({state}) {
  return {value: state};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchBreweriesByName,filterBreweriesByName}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)