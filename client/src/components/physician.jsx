import React from 'react';
import styles from './styles.css.js';

const Physician = (props) => {
    <div style={props.selected === props.id? Object.assign(styles.PhyCont, {backgroundColor: 'Blue', color: 'White'}):styles.PhyCont}>
        <div style={styles.PhyRow} onClick={props.click(props.id)}>{props.name}</div>
    </div>
}

export default Physician;