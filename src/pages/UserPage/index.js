import React from 'react';
import BottomNav from '../../components/BottomNav';
import Layout from '../../Layout/BasicLayout';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/user/actionCreators';


const UserPage = (props) => {
    let { isLogin } = props
    console.log(props)
    function login() {
        props.login({ isLogin: true })
    }
    return (
        <div>
            <div>登录状态: {props.isLogin.toString()}</div>
            <div>UserPage2</div>
            <button onClick={login}>登录</button>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    isLogin: user.isLogin
})

//  mapDispatchToProps 可以是对象，也可以是函数
// 函数
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actionCreators, dispatch)
})

// 对象
// const mapDispatchToProps = {
    // ...bindActionCreators(actionCreators, dispatch)
    // 返回一个action
    // login: (userInfo) => { return login(userInfo) }
    // 加入异步, 此种方法必须引入thunk，dispatch 的是一个函数 
    // login: userInfo => (dispatch) => {
    //     setTimeout(() => {
    //         dispatch(login(userInfo))
    //     }, 2000)
    // }
// }


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

