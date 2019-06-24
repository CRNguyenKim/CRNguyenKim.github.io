import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';


import store from './redux/store';
import {loadAdmin} from './redux/actions/auth'



class App extends Component {

    componentDidMount(){
        store.dispatch(loadAdmin())
    };

    render(props) {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
