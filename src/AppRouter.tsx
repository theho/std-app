import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from './App';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router>
            <div className="container-fluid">
                <Route component={App} />
                <Switch />
            </div>
        </Router>
    );
}
