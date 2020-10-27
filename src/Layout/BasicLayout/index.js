import "./index.scss";
import React, { Component } from 'react';
import BottomNav from '../../components/BottomNav'
import TopBar from "../../components/TopBar";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        const { title = '默认' } = this.props
        document.title = title
    }
    render() { 
        let { children } = this.props
        return ( 
            <div className="basicLayout">
                <TopBar></TopBar>
                <BottomNav></BottomNav>
                <div className="content">
                    {children}
                </div>
            </div>
        );
    }
}
 
export default Layout;