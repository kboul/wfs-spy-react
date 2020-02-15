import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';
import Footer from './Footer';

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
