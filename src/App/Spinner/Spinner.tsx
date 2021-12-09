import loaderIcon from './loader.gif';
import styles from './Spinner.module.sass';

export default function Spinner() {
    return (
        <div className={styles.loader}>
            <img src={loaderIcon} alt="loader" />
        </div>
    );
}
