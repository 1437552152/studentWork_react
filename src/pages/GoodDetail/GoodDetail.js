/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-24 16:45:04
 * @FilePath     : \react-website(1)(1)\src\pages\GoodDetail\GoodDetail.js
 */
import React, { Component } from 'react';
import { Button,Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from '@/styles/common.css';
export default class GoodDetail extends Component {
    constructor(props) {
        super(props)
      this.state = {
        params: {}
        }
    }
   
  componentDidMount() {
    let goodList = JSON.parse(localStorage.getItem('goodList'));
    let flag =window.localStorage.getItem('flag');
    if (!flag) { 
        this.props.history.push('/login')
    }

      goodList.map(item=>{
       if(item.id==this.props.match.params.id){
        this.setState({
          params:item
        })
       }
      });
  }

  changeStatus = (params) => { 
    let data = params;
    data.checked=!this.state.params.checked
    this.setState({ params: data });
    
    let goodList = JSON.parse(localStorage.getItem('goodList'));
    goodList.map(item=>{
     if(item.id==this.props.match.params.id){
         item.checked=!item.checked
     }
    });
    window.localStorage.setItem('goodList',JSON.stringify(goodList))
  }


  render() {
    const { params } = this.state;
        return (            
          <div style={{ height: "100%" }}>
              <Icon type="arrow-left" onClick={()=>this.props.history.push('/')} style={{fontSize:30,marginTop:"20px",marginLeft:"20px"}}/>
            <img src={this.state.params.img} style={{ width: "100%", marginBottom: "20px" }} /> 
            <div>
              <h1 style={{textAlign:"center"}}> {params.title}</h1>
              <p style={{ fontSize:"24px",marginLeft:"20px"}}>价格:￥{params.price}</p>
            </div>
              <div className={styles.header} style={{zIndex:'9999'}}>
                <div className={`${styles.btnList} ${styles.btnGroup}`}>
                <Link to="/" ><div><img src={require('../../static/images/img1.png')} /></div>店铺</Link>
                <Link to="/"><div><img src={require('../../static/images/img4.png')} /></div>客服</Link>
                <a href="javascript:void(0)" onClick={()=>this.changeStatus(params)}><div><img src={params.checked ? require('../../static/images/img3.png') : require('../../static/images/img2.png')} /></div>{params.checked?'取消收藏':'收藏'}</a>
                <Link to="/" style={{marginRight:'0'}}><div><img src={require('../../static/images/img6.png')} /></div>加入购物车</Link>
                <Link to="/" style={{marginRight:'0'}}><div><img src={require('../../static/images/img5.png')} /></div>购买</Link>
               </div>
		         	</div>
          </div>
        )   
    }
}