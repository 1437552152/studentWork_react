import React, { Component } from 'react';
import styles from '@/styles/common.css';
export default class Login extends Component {
    constructor(props) {
        super(props)
      this.state = {
        
        }
    }
 
  goLogin = () => {
    localStorage.setItem('flag', true);
    this.props.history.push('/')
   }

  render() {
        return (            
          <div>
            <div className={styles.backNav}>
              <div className={styles.nav_logo}>
              </div><div className={styles.nav_arrow} onClick={() => this.props.history.push('/')}></div>
            </div>
            <div className={styles.logo}><div className={styles.tb_logo}></div></div>
            <div>
            <input type="text" className={styles.loginInput} placeholder="手机号/邮箱/会员名" autocapitalize="off" />
            <input type="password" className={styles.loginInput} placeholder="请输入登录密码"  />
            </div>
             <div className={styles.fm_btn}>
              <button className={styles.fm_button} onClick={this.goLogin}>登录</button>
            </div>
          
          </div>
        )   
    }
}