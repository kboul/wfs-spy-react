import React, { FC } from 'react';
import ogcLogo from './assets/ogc_logo.jpg';
import tuLogo from './assets/tu_logo.png';

interface ILogos {}

const logosStyle = {
    height: 50,
    width: 100
};

const Logos: FC<ILogos> = () => {
    return (
        <>
            <img
                src={ogcLogo}
                alt="OGC logo"
                className=" mr-4"
                style={logosStyle}
            />
            <img src={tuLogo} alt="TU logo" style={logosStyle} />
        </>
    );
};

export default Logos;
