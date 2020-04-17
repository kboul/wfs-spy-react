import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import routes from './routes';

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                {routes.map(({ path, component }) => (
                    <Route
                        key={`route-${path}`}
                        path={path}
                        component={component}
                    />
                ))}
                <Redirect from="*" to={routes[0].path} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
