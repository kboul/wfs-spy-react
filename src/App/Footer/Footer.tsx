import styles from './Footer.module.sass';

export default function Footer() {
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
}
