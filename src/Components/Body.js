/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import Home from './Home';
import Music from './Music';
import Photos from './Photos';
import Videos from './Videos';
import GuestBook from './GuestBook';
import Movies from './Movies';


class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab;
        if(activeTab == 1){
            return <Home/>
        } else if (activeTab == 2) {
            return <Music/>
        } else if (activeTab == 3) {
            return <Photos/>
        } else if (activeTab == 4) {
            return <Videos/>
        } else if (activeTab == 5) {
            return <GuestBook/>
        } else {
            return <Movies/>
        }
    }
    render() {
        return (
            this.displayContent()    
        );
    }
}

export default Body;