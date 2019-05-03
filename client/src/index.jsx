import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Physician from './components/physician.jsx';
import Appointment from './components/appointment.jsx';
import format from 'date-fns/format';
import styles from './components/styles.css.js';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        physicians: [],
        appointments: [],
        selected: null,
      }
      this.getAppointments = this.getAppointments.bind(this);
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

    getAppointments(id, name) {
        $.ajax({
            url: `http://${document.URL.split('/')[2]}/appointments/ID=${id}&date=${format(Date(Date.now()), 'MMDDYY')}`,
            success: (data) => {
                this.setState({
                    appointments: data,
                    selected: id,
                    selectedName: name
                })
            }
        })
    }

  render() {
    return (
      <div style={styles.MainCont}>
        <h1 style={styles.Header}>Notable Appointment List</h1>
        <div style={styles.PhyMainCont}>
        <div style={Object.assign({},styles.PhyCont,{fontSize: '20px', border: 'solid', borderRadius: '1px'})}><b>Doctor Name</b></div>
        {this.state.physicians.map((physician) => (
            <Physician name={physician.physicianname} id={physician.id} click={this.getAppointments} selected={this.state.selected}/>
          ))}
        </div>
        <div style={styles.AppMainCont}>
        <h1 style={styles.Header}>Patient List</h1>
        <div style={styles.AppCont}>
          <div style={Object.assign({paddingTop:'10px',paddingBottom:'10px'},styles.AppRow1)}>Name</div>
          <div style={Object.assign({paddingTop:'10px',paddingBottom:'10px'},styles.AppRow2)}>Time</div>
          <div style={Object.assign({paddingTop:'10px',paddingBottom:'10px'},styles.AppRow3)}>Meeting Type</div>
        </div>
        {this.state.appointments.map((appointment) => (
            <Appointment name={appointment.appname} type ={appointment.apptype} time={appointment.apptime} />
          ))}</div>
      </div>
      )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));