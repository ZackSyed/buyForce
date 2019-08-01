import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Route } from 'react-router-dom';
import Splash from './components/splash';


const App = () => (
    <div>
        <React.Fragment>

            <Route exact path='/' component={Splash} />
        </React.Fragment>
    </div>
);

export default App; 
