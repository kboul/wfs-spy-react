import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from './Footer';
import NavBar from './NavBar';
import Spinner from './Spinner';
import { Provider } from '../context';
import { getCapRoutes, descrFeatTypeRoutes, mainRoutes } from './routes';

export default function App() {
    const routes = [...mainRoutes, ...getCapRoutes, ...descrFeatTypeRoutes];
    return (
        <Provider>
            <ToastContainer hideProgressBar />
            <NavBar />
            <Suspense fallback={<Spinner />}>
                <Switch>
                    {routes.map(({ path, component }, index) => (
                        <Route
                            component={component}
                            key={`routes-${index}`}
                            path={path}
                        />
                    ))}
                    <Redirect from="*" to={routes[0].path} />
                </Switch>
            </Suspense>
            <Footer />
        </Provider>
    );
}
