import React, { Component } from 'react';
import me from './images/me.jpg';

class Home extends Component {
    render() {
        return (
            <div className="main-body-home">
                <div className="main-image"><img src={me} alt="Met"/></div>
                <div className="main-body-text">
                    <p>
                        Hello! My name is Derek Cheng and I am currently a third year at UCSB studying 
                        Computer Engineering. I am a Resident Assistant of San Miguel Hall as well as 
                        the External Communications Director of the EVPSA Office at UCSB. I'm excited
                        to learn more in this class! 
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;