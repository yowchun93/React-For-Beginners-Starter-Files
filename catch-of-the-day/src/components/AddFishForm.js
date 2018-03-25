import React from 'react'

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  descRef = React.createRef();
  statusRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: this.priceRef.value.value,
      desc: this.descRef.value.value,
      status: this.statusRef.value.value
    }
    // this method updates the state
    this.props.addFish(fish);
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc" />
        <input name="image" type="text" placeholder="Image" />
        <button type="submit"> Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm