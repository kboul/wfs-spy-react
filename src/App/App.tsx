import { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Routes,
    Route
} from 'react-router-dom';
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
            <Router basename={`${process.env.PUBLIC_URL}/`}>
                <NavBar />
                <Routes>
                    {routes.map(({ path, Component }, index) => (
                        <Route
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <Component />
                                </Suspense>
                            }
                            key={`routes-${index}`}
                            path={path}
                        />
                    ))}
                    <Route
                        path="*"
                        element={<Navigate to={routes[0].path} />}
                    />
                </Routes>
            </Router>
            <Footer />
        </Provider>
    );
}
