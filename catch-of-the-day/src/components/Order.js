import React from "react"

class Order extends React.Component {

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === 'available';
    if (!isAvailable) {
      <li>
        Sorry { fish ? fish.name: 'fish' } is no longer available
      </li>
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        { count * fish.price }
      </li>
    )
  }

  render() {
    // return <div className="Order">Order </div>
    // Object.key
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status == "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal
    },0);
    return (
      <div className="order-wrap">
        <h2> Order </h2>
        <ul>
          {orderIds.map(key => <li>{key}</li>)}
        </ul>
        <h2>{ total }</h2>
      </div>
    )
  }
}

export default Order;