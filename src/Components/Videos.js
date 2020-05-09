/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';
import "../App.css"
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class Videos extends Component {
    render() {
        return (
            <div>
                 <div class="header-videos">
		            <h1>My Videos</h1>
	            </div>
                <div className="header-caption">
                    <h3>Here's a selection of some interesting videos!</h3>
                </div>

                <div>
                    <ScrollUpButton/>
                </div>

                <div className="videos-container">
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