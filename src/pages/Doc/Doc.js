/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-19 22:55:21
 * @FilePath     : \react-website(1)(1)\src\pages\Doc\Doc.js
 */
import React, { Component } from 'react'
import style from './index.css';
import { Link } from 'react-router-dom';
export default class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {    
            goodList: []
        }
    }

    componentDidMount() { 
        let list = JSON.parse(window.localStorage.getItem('goodList'));
        let flag =window.localStorage.getItem('flag');
        if (!flag) { 
            this.props.history.push('/login')
        }

        if (list) { 
          let goodList =list.filter(item=>item.checked)
            this.setState({goodList})
        }
    }

    render() {  
        const { goodList } = this.state;
        return (
            <div style={{ height: "100%" }}>
                <div className={style.goodList}>
                    {goodList.length?goodList.map((item, index) => {
                        return <div className={style.recommend_item} key={index}>
                            <Link className={`${style.recommend_img_wrapper} ${style.triggerClick}`} to={`/goodDetail/${item.id}`}>
                                <img className={`${style.recommend_img} ${style.lazyload}`} src={item.img} />
                            </Link>
                            <Link className={`${style.recommend_info} ${style.triggerClick}`} to={`/goodDetail/${item.id}`}>
                                <div className={`${style.recommend_title}`}>
                                    <span className={`${style.recommend_title_p}`}>{item.title}</span>
                                </div>
                                <div className={`${style.recommend_price_box}`}>
                                    <span className={`${style.recommend_sign} ${style.recommend_h}`}>￥</span>
                                    <span className={`${style.recommend_price}`}>{item.price}</span>
                                </div>
                            </Link>
                        </div>
                    }):<div  style={{ height: "100%",fontSize:'26px' }}>暂无收藏</div>}
                </div>
            </div>

        )
    }
}
