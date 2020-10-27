import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Layout from '../Layout/BasicLayout';
import HomePage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import _404 from '../pages/_404';


const Routes = () => {
    return ( 
        <Router>
            {/* 独占路由，只显示一个 */}
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/login" component={LoginPage}></Route>
                    <Route path="/user" component={UserPage}></Route>
                    <Route path="*" component={_404}></Route>
                </Switch>
            </Layout>
        </Router>
     );
}
 
export default Routes;