import ogcLogo from './assets/ogc_logo.jpg';
import tuLogo from './assets/tu_logo.jpeg';
import styles from './index.module.sass';

export default function Logos() {
    const ogcStyle = `${styles.logos} ${styles.ogc}`;
    return (
        <>
            <img src={ogcLogo} alt="OGC logo" className={ogcStyle} />
            <img src={tuLogo} alt="TU logo" className={styles.logos} />
        </>
    );
}
