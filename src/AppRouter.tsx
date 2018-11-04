import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from './App';

export class AppRouter extends React.Component<{}> {
    render(): JSX.Element {
        return (
            <Router>
                <div className="container-fluid">
                    <Route component={App} />
                    <Switch />
                </div>
            </Router>
        );
    }
};

export default AppRouter;
