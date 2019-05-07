import React, { Component } from "react";
import styles from "./index.module.css";
import {FaGithubSquare} from "react-icons/fa";

class Header extends Component {

    render() {
        return (
          <div className={`${styles.headerParent}`}>
            <div className={`${styles.authorTitleParent}`}>
              <p className={`${styles.authorTitle}`}>anexashbutsuak</p>
            </div>
            {/* <div>
                    <FaGithubSquare />
                </div> */}
          </div>
        );
    }
}

export default Header;