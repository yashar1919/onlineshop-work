import React from 'react';
import loader from "../icons/loader.gif";
import styles from "../styles/Loading.module.css";

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={loader} alt='Loading' />
            <h1 className={styles.loading}>L O A D I N G...</h1>
        </div>
    );
};

export default Loading;