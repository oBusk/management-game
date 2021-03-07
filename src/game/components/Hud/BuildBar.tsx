import styles from "./BuildBar.module.css";

const BuildBar = () => (
    <div className={styles.buildBar}>
        <button
            className={styles.buildButton}
            title="Build factory (💶100, 🌲10)"
        >
            <div className={styles.buildButtonIcon}>🏭</div>
            <div>Factory</div>
            <div>(💶100, 🌲10)</div>
        </button>
        <button className={styles.buildButton} title="Build house (💶20, 🌲10)">
            <div className={styles.buildButtonIcon}>🏡</div>
            <div>House</div>
            <div>(💶20, 🌲10)</div>
        </button>
    </div>
);

export default BuildBar;
