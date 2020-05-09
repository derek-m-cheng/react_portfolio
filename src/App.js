import React, {Component} from 'react';
import "./App.css";
import TabList from './Components/TabList';
import Body from './Components/Body';
import SimpleReactLightbox from 'simple-react-lightbox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }

  
  render() {
    
    const tabs = [
      {
        id: 1, 
        title: 'Home'
      },
      {
        id: 2,
        title: 'Music'
      },
      {
        id: 3,
        title: 'Photos'
      },
      {
        id: 4,
        title: 'Videos'
      },
      {
        id: 5,
        title: 'Guest Book'
      }
    ]
    return (
      <div className="App">
      <SimpleReactLightbox>
        <div className="body">
          <div className="title"><h1>Derek Cheng's Website</h1></div>
          <div className="header"><h2>CS 185 Spring Quarter 2020</h2></div>
          <div className="nav-bar">
            <TabList tabs={tabs} 
            changeTab={this.changeTab}
            activeTab={this.state.activeTab}/>
          </div>
          <div className="main-body">
            <Body activeTab={this.state.activeTab}/>
          </div>
        </div>
      </SimpleReactLightbox>
      </div>
    );
  }

}

export default App;