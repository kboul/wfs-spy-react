import React, { FC } from 'react';
import styles from './index.module.sass';

interface IFooter {}

const Footer: FC<IFooter> = () => {
    const text = (
        <div>
            Developed & designed by <b>Konstantinos Voulgaridis</b>
        </div>
    );

    return (
        <div>
            <div className={styles.phantom} />
            <div className={styles.footer}>{text}</div>
        </div>
    );
};

export default Footer;
