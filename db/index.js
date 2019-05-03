const { Pool } = require('pg');
//implement redis caching
const client = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'notable',
	password: 'postgres',
	port: 5432
});

client.connect((err) => {
	if (err) {
		console.error(err.stack);
	} else {
		console.log('connected');
	}
})


const getAppointments = (ID, date) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM appointments WHERE physicianid=${ID} AND appDate='${date}'`, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.rows);
            }
        })
    })
}


const getPhysicians = () => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM physicians`, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.rows);
            }
        })
    })
}


module.exports = {
    getAppointments,
    getPhysicians
}
