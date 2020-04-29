import React, { Component } from 'react';
import "../App.css"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class Photos extends Component {
    render() {
        return (
            <div>
                <div class="header">
		            <h1>My Photos</h1>
	            </div>
                <div class="header-caption">
                    <h3>Here's a selection of my photos!</h3>
                </div>
                <button class="scrollTop"> 
                    <i class="material-icons"><ArrowUpwardIcon/></i>
                </button>
            </div>
        );
    }
}

export default Photos;