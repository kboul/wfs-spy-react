import React, { FC } from 'react';

import ogcLogo from './assets/ogc_logo.jpg';
import tuLogo from './assets/tu_logo.jpeg';
import styles from './index.module.sass';

const Logos: FC = () => {
    const ogcStyle = `${styles.logos} ${styles.ogc}`;
    return (
        <>
            <img src={ogcLogo} alt="OGC logo" className={ogcStyle} />
            <img src={tuLogo} alt="TU logo" className={styles.logos} />
        </>
    );
};

export default Logos;
