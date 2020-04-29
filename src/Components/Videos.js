import React, { Component } from 'react';
import "../App.css"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class Videos extends Component {
    render() {
        return (
            <div> 
                <div class="header-caption">
                    <h3>Here's a selection of some interesting videos!</h3>
                </div>

                <button class="scrollTop"> 
                    <i class="material-icons"><ArrowUpwardIcon/></i>
                </button>

                <div class="videos-container">
                    <div>	
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/V3Um7TJWsoI" allowfulscreen></iframe>
                    </div>
                    <div>
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/8WDNgfnZ3HM" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/uVeNEbh3A4U" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/3RMqRC5fzd0" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/drzq1x0mqjo" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/ctj-RDbTBMU" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/v3O9vNi-dkA" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/SR1jwwagtaQ" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Videos;