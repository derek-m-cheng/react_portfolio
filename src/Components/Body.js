import React, { Component } from 'react';
import Home from './Home';
import Music from './Music';
import Photos from './Photos';
import Videos from './Videos';


class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab;
        if(activeTab == 1){
            return <Home/>
        } else if (activeTab == 2) {
            return <Music/>
        } else if (activeTab == 3) {
            return <Photos/>
        } else {
            return <Videos/>
        }
    }
    render() {
        return (
            this.displayContent()    
        );
    }
}

export default Body;