/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-19 22:52:36
 * @FilePath     : \react-website(1)(1)\src\routers\include.js
 */
import React, { Component } from "react";
import Header from "@/components/public/header";
import styles from "@/styles/common.css";
import {withRouter  } from 'react-router-dom';
class Include extends Component {
  constructor(p) {
    super(p);
    this.state = {
    };
  }


  render() {
    const { children } = this.props;
    return (
      <div>     
        <div className={styles.content}>{children}</div>
        <div className={styles.header}>
            <Header {...this.props}/>
        </div>
      </div>
    );
  }
}
export default withRouter(Include);
