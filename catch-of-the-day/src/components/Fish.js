import React from "react"

class Fish extends React.Component {

  handleClick = (event) => {
    this.props.addToOrder(this.props.index);
  }

  render() {
    // dependant on sequence, which is bad
    const { name, price, desc } = this.props.details;
    // this line is gonna break
    // const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <h2>{this.props.details.name}</h2>
        <h3 className="fish-name">
          { name }
          <span className="price">{price}</span>
        </h3>
        <p> {desc} </p>
        <button onClick={this.handleClick.bind(this)} >
          Add to Order
        </button>
      </li>
    )
  }
}

export default Fish