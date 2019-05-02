import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Physician from './components/physician.jsx';
import Patient from './components/patient.jsx';
import format from ('date-fns/format');
import styles from './components/styles.css.js';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        physicians: [],
        patients: [],
        selected: null,
      }
      this.getPatients = this.getPatients.bind(this);
    }

    componentDidMount() {
        $.ajax({
          url: `http://${document.URL.split('/')[2]}/physicians`, 
          success: (data) => {
            this.setState({
              physicians: data
            })
          },
          error: (err) => {
            console.log('err', err);
          }
        });
    }

    getPatients(id) {
        $.ajax({
            url: `http://${document.URL.split('/')[2]}/appointments/ID:=${ID}&date=:${format(Date.parse(Date.now()), 'MMDDYY')}`,
            success: (data) => {
                this.setState({
                    patients: data,
                    selected: id,
                    selectedName: 
                })
            }
        })
    }

    render() {
        <div style={styles.MainCont}>
            {this.state.physicians.map((physician) => {
                <Physician name={physician.name} id={physician.id} click={this.getPatients} selected={this.state.selected}/>
            })}
            {this.state.patients.map((patient) => {
                <Patient name={patient.name} type ={patient.type} time={patient.time} />
            })}
        </div>

    }

}


ReactDOM.render(<App />, document.getElementById('app'));