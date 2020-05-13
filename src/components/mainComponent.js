import React, { Component } from 'react';
import Header from './headerComponent';
import Home from './homeComponent';
import Room from './roomComponent';
import Menu from './menuComponent';
import Contact from './contactComponent';
import Background from './backgroundComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                
                <Header />
                <Switch>
                    <Route exact path='/home' render={() => <Home />} />
                    <Route exact path='/rooms' render={() => <Room />} />
                    <Route exact path='/menu' render={() => <Menu />} />
                    <Route exact path='/contact' render={() => <Contact />} />
                    
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main