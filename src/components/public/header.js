/*
 * @Author       : yfye
 * @Date         : 2020-10-17 13:55:28
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-24 16:53:20
 * @FilePath     : \react-website(1)(1)\src\components\public\header.js
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/common.css';
import { Button,Icon } from 'antd';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 1
		};
	}

	componentDidMount() {
	
	}




	render() {
		const { current } = this.state;
		return (
			<div className={styles.header} style={{display:this.props.location.pathname=="/login"?'none':'block'}}>
				<div className={styles.btnList}>
				<Link onClick={() => { this.setState({ current: 1 }) }} to="/Home" className={current === 1 ? styles.active : ''}><p><Icon type="home" /></p>首页</Link>
				<Link onClick={() => { this.setState({ current: 2 }) }} className={current === 2 ? styles.active : ''} to="/doc/core"><p><Icon type="shopping-cart" /></p>收藏</Link>
				<Link onClick={() => { this.setState({ current: 3 }) }} to="/tuto" className={current === 3 ? styles.active : ''}><p><Icon type="unordered-list" /></p>订单列表</Link>
				<Link onClick={() => { this.setState({ current: 4 }) }} className={current === 4 ? styles.active : ''} to="/blog" style={{marginRight:'0'}}><p><Icon type="user" /></p>我的淘宝</Link>
				<Link onClick={() => { this.setState({ current: 5 }) }} className={current === 5 ? styles.active : ''} to="/comm" style={{marginRight:'0'}}><p><Icon type="dash" /></p>更多</Link>
		</div>
			</div>
		);
	}
}
export default Header;