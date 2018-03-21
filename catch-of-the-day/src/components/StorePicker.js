import React from 'react'
// importing helper functions
import { getFunName } from '../helpers';

//https://www.reddit.com/r/reactjs/comments/7hdcd2/is_wesbos_reactforbeginners_worth_it/
class StorePicker extends React.Component {

  constructor() {
    super();
  }

  myInput = React.createRef();

  // why does using arrow function negates the use of binding this.
  goToStore(event) {
    event.preventDefault();
    console.log("Going to store")
    // 2. get the text from that input
    console.log("this value is", this)
    console.log(this.myInput);
    // 3. Change the page to
  }

  handleClick() {
    console.log("Heyyy!");
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store </h2>
        <button onClick={this.handleClick}>Click Me!</button>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit"> Visit Store </button>
      </form>
    )
  }
}

export default StorePicker;