import React from 'react';
import propTypes from 'prop-types'

class Brewery extends React.Component {
    
  render() {
    return (
        <div data-test="brewery">
            {  
              this.props.brewery 
                ?
                Object.keys(this.props.brewery).map(key => 
                  <div key={key}>{key} : {this.props.brewery[key]}</div>)
                :
                <span></span>
            }
        </div>
    )
  }

}

Brewery.propTypes = {
  brewery: propTypes.object
}

export default Brewery