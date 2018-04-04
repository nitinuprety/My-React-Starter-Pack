import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Button from 'material-ui/Button';
import { Link } from 'react-router';

class SearchBar extends Component {


  render() {
    return (
        <div className="mtb-20 text-center">
        	<Link to="/home">
	       		<Button variant="raised" color="primary">
		      		Home
		    	</Button>
		    </Link>
		    <Link to="/backpack">
		    	<Button style={{margin:"0 20px"}} variant="raised" color="secondary">
		      		Backpack
		    	</Button>
		    </Link>
		    <Link to="/about">
		    	<Button variant="raised">
		      		About
		    	</Button>
		    </Link>
        </div>   
    );
}



}
export default SearchBar;
