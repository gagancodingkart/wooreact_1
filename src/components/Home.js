import React, { Component } from "react";
import { WooCommerce } from "./WooConnection.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
   getData() {
    const that = this;
    WooCommerce.getAsync("products?per_page=20").then(function(result) {
      that.setState({
        isLoaded: true,
        items: JSON.parse(result.toJSON().body)
      });
    });
  }

componentDidMount() {
    this.getData();
  }
 render() {
     return (
      <div>
     {this.state.items.map((val, index) => (
        <div class="col-sm-4">            
          <img src={val.images[0].src} alt="" />
          <h2>${val.price}</h2>
          <p>{val.name}</p>
        </div>
       ))}
      </div>)
  }    
}
export default Home;