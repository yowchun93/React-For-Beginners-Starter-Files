import React from 'react'
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    console.log("adding fish hahhaha");
    // in order to update state, we should be using setState which is provided by React
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish
    this.setState({
      fishes: fishes
    })
  };


  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fish is so good" age={50}/>
        </div>
        <Inventory addFish={this.addFish}/>
        <Order />
      </div>
    );
  }
}

export default App;