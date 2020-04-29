import React, { Component } from 'react';

class Tab extends Component {
    addStyling = () => {
        if(this.props.tab.id == this.props.activeTab) {
            return {backgroundColor:  '#2E5984'}
        } else {
            return {backgroundColor: '#BCD2E8'}
        }
    }
    render() {
        return (
            <div className='tab'
            style={this.addStyling()}
            onClick={this.props.changeTab.bind(this, this.props.tab.id)}>
                <h3>{this.props.tab.title}</h3>
            </div>
        );
    }
}

export default Tab;