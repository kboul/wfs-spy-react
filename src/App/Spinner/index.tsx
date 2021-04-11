import loaderIcon from './loader.gif';
import styles from './index.module.sass';

const Spinner = () => {
    return (
        <div className={styles.loader}>
            <img src={loaderIcon} alt="loader" />
        </div>
    );
};

export default Spinner;
