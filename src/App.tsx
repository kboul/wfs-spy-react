import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { getCapRoutes, descrFeatTypeRoutes, mainRoutes } from './routes';

const App = () => {
    const routes = [...mainRoutes, ...getCapRoutes, ...descrFeatTypeRoutes];
    return (
        <>
            <NavBar />
            <Switch>
                {routes.map(({ path, component }, routeIndex) => (
                    <Route
                        key={`route-${routeIndex}`}
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
