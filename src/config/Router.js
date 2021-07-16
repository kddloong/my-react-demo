import React from 'react';
import Home from '../pages/home/home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Detail from '../pages/detail/detail';

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path='/detail' component={Detail}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;
