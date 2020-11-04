/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-20 00:38:44
 * @FilePath     : \react-website(1)(1)\src\pages\FindSearch\FindSearch.js
 */
import React, { Component } from 'react';
import { Input,Button } from 'antd';
export default class FindSearch extends Component {
    constructor(props) {
        super(props)
      this.state = {
        
        }
    }

  render() {
        return (            
          <div style={{ width: '100%' }}>
            <div style={{ backgroundColor: 'rgb(255, 133, 42)' }}>
                <div style={{ width: "100%", margin: "0 auto", padding: "4px" }}>
                  <Input placeholder="寻找宝贝店铺" style={{ width: "300px" }} />
                  <Button type="default" onClick={()=>this.props.history.push('/')}>取消</Button>
                </div>
            </div>
          </div>
        )   
    }
}