DROP DATABASE IF EXISTS notable;

CREATE DATABASE notable;

DROP TABLE physicians;

DROP TABLE appointments;

\c notable;

CREATE TABLE IF NOT EXISTS physicians (
  id SERIAL UNIQUE PRIMARY KEY,
  physicianName text NOT NULL
);

CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL UNIQUE PRIMARY KEY,
  physicianid INTEGER REFERENCES physicians(id),
  appNumber SMALLINT NOT NULL,
  appName text NOT NULL,
  appType text NOT NULL,
  appDate varchar(6) NOT NULL,
  appTime varchar(6) NOT NULL
);

COPY physicians(id, physicianName) FROM 'G:\physicians.csv' (FORMAT CSV);

COPY appointments(physicianid, appNumber, appName, appType, appDate, appTime) FROM 'G:\patients.csv' (FORMAT CSV);

CREATE INDEX physician_id ON physicians (id);

CREATE INDEX appointment_id ON appointments (id);

CREATE INDEX foreign_id ON appointments (physicianid);