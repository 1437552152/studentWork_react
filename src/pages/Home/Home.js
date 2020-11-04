/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-24 16:47:40
 * @FilePath     : \react-website(1)(1)\src\pages\Home\Home.js
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style from './index.css';
import { Input, Carousel } from 'antd';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodList:[] 
        }
    }

    goFind = () => {
        this.props.history.push('/FindSearch')
    }

    componentDidMount() { 
        let goodList = localStorage.getItem('goodList');
        if (goodList) {
            goodList = JSON.parse(localStorage.getItem('goodList'));
            this.setState({ goodList });
        } else {
            fetch(`https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist`, {
                method: 'GET',
            }).then((response) => {
                response.json().then((json) => {
                    console.log(json);
                    json.data.map((item) => { 
                        item.checked=0
                    })
                    this.setState({ goodList: json.data });
                    window.localStorage.setItem("goodList", JSON.stringify(json.data))
                });
            })
        }     
    }

    render() {
        const { goodList } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <div style={{ backgroundColor: 'rgb(255, 133, 42)' }}>
                    <div style={{ width: "100%", margin: "0 auto", padding: "4px" }}>
                        <img src="https://gw.alicdn.com/bao/uploaded/TB1FjNySpXXXXc8aXXXXXXXXXXX-200-200.png" style={{ width: '30px', marginRight: "16px" }} />
                        <Input placeholder="寻找宝贝店铺" style={{ width: "300px" }} onClick={this.goFind} />
                    </div>

                </div>
                <Carousel autoplay className={style.Carousel}>
                    <div>
                        <img src={require('../../static/images/0.jpg')} />  
                    </div>
                    <div>
                        <img src={require('../../static/images/1.jpg')} />
                    </div>
                    <div>
                        <img src={require('../../static/images/2.jpg')} />
                    </div>
                </Carousel>

                <div className={style.goodList}>
                    {goodList.map((item, index) => {
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
                    })}
                </div>
            </div>
        )
    }
}
