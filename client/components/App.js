import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Header from './Header';
import NotMatch from './NotMatch';
import Admin from './Admin';

import Promise from 'promise-polyfill'; 
// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/admin" component={Admin}/>
                        <Route component={NotMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;