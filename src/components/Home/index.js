import React, { Component } from "react";
// import styles from "./index.module.css";
import Logo from "../Logo";
import "./index2.css";
import "./noscript.css";

class Home extends Component {
  render() {
    return (
      <div>
        <section id="banner">
          <header>
            <h2>This is Overflow</h2>
          </header>
          <p>A brand new site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a>.<br />
            It’s responsive, built on HTML5/CSS3, and entirely free<br />
            under the <a href="http://html5up.net/license">Creative Commons license</a>.</p>
          <footer>
            <a href="#first" class="button style2 scrolly">Act on this message</a>
          </footer>
        </section>
      </div>
    );
  }
}

export default Home;
