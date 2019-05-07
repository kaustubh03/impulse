import React, { Component } from "react";
import styles from "./index.module.css";
import Header from "../Header";
import SearchBox from "../SearchBox";
import Clock from 'react-live-clock';


class Quote extends Component {

  componentDidMount = () =>{
    
  }
    
    render() {
      const { quote } = this.props;
        return (
          <div className={`${styles.quoteContainer}`}>
            <header>
              <Header />
              <h2>{quote.quote}</h2>
              <div className={styles.clockContainer}>
                <Clock
                  style={{ fontSize: "1.5em" }}
                  format={"dddd, MMMM Mo, YYYY, h:mm:ss A"}
                  ticking={true}
                />
              </div>
              <SearchBox />
            </header>
          </div>
        );
    }
}

export default Quote;