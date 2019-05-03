import React from 'react';
import styles from './styles.css.js';

const Appointment = (props) => {
    return (
        <div style={styles.AppCont}>
            <div style={styles.AppRow1}>{props.name}</div>
            <div style={styles.AppRow2}>{props.time}</div>
            <div style={styles.AppRow3}>{props.type}</div>
        </div>
    )
}

export default Appointment;