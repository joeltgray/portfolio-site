import React from 'react';

import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles['footer']}>
            <p>Joel Gray - {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;
