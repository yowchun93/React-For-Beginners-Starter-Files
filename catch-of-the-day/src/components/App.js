import React from 'react'
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

class App extends React.Component {

  state = {
    fishes: [],
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

  addToOrder = (key) => {
    // 1. take a copy of state
    // Add to the order, update number in order
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fish Seafood Market" age={50}/>
          <ul className="fishes">
            {
              Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}

export default App;