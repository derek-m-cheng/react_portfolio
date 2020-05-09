import React, { Component } from 'react';
import Home from './Home';
import Music from './Music';
import Photos from './Photos';
import Videos from './Videos';
import GuestBook from './GuestBook';


class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab;
        // eslint-disable-next-line eqeqeq
        if(activeTab == 1){
            return <Home/>
        // eslint-disable-next-line eqeqeq
        } else if (activeTab == 2) {
            return <Music/>
        // eslint-disable-next-line eqeqeq
        } else if (activeTab == 3) {
            return <Photos/>
        // eslint-disable-next-line eqeqeq
        } else if(activeTab == 4) {
            return <Videos/>
        } else {
            return <GuestBook/>
        }
    }
    render() {
        return (
            this.displayContent()    
        );
    }
}

export default Body;