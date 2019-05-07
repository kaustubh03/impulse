import React, { Component } from "react";
import styles from "./index.module.css";


class SearchBox extends Component {
  state = {
      searchVal:null
  }
  componentDidMount = () => {};

  searchGoogle = (e) =>{
      e.preventDefault();
   window.location.href = `https://www.google.com/search?q=${this.state.searchVal}`  
  };

  getSearchValue = (e) =>{
      this.setState({ searchVal: e.target.value });
  };
  
  render() {
    return (
      <div className={`${styles.searchBoxParent}`}>
        <form onSubmit={this.searchGoogle}>
          <input
            type="text"
            className={`${styles.searchBox} center`}
            placeholder="Google Search"
            autoFocus
            onChange={this.getSearchValue}
          />
        </form>
      </div>
    );
  }
}

export default SearchBox;