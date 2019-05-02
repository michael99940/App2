const fs = require('fs');
const faker = require('faker');
const path = require('path');
const format = require('date-fns/format');

const meetingType = ['Follow-up', 'New Patient'];
const generateName = () => `${faker.name.firstName()} ${faker.name.lastName()}`;
const generateDate = () => format(Date(Date.now()), 'MMDDYY');
const generateTime = () => (Math.floor(Math.random() * (23 - 10) + 10) * 100);
const generateType = () => meetingType[Math.floor(Math.random() * 2)];

let i = 0;
let sampleSize = 100;
const wPhyStream = fs.createWriteStream('E:/physicians.csv', {flags: 'w'});
const wPatStream = fs.createWriteStream('E:/patients.csv', {flags: 'w'});

const WriteOne = () => {
    while(i < sampleSize) {
        for (let j = 1; j < 6; j++) {
            if (!WritePhy(i,j)) {
                return;
            }
        }
        if (!wPhyStream.write(`${i},${generateName()}\n`)) {
            i++;
            return;
        }
        i++;
    }
    wPhyStream.end();
    wPatStream.end();
}

const WritePhy = (i,j) => {
    return wPatStream.write(`${i},${j},${generateName()},${generateType()},${generateDate()},${generateTime()}\n`);
}

wPhyStream.on('drain', () => {
    WriteOne();
});

wPatStream.on('drain', () => {
    WriteOne();
})

WriteOne();