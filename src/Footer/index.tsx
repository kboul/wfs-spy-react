import React, { FC } from 'react';
import styles from './index.module.sass';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    const text = 'Developed by Konstantinos Voulgaridis';
    return (
        <div>
            <div className={styles.phantom} />
            <div className={styles.footer}>{text}</div>
        </div>
    );
};

export default Footer;
