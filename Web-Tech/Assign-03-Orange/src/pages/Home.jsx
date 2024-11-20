import React, { useState } from 'react';
import appointmentData from '../assets/appoinemntdata'; // Adjust the path as needed

function Appointments() {
  const [appointments, setAppointments] = useState(appointmentData);

  const completedCount = appointments.filter(appt => appt.status === 'completed').length;

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      color: '#333',
      hover: 'pointer',
    },
    header: {
      fontSize: '2em',
      color: '#0044cc',
      marginBottom: '20px',
    },
    appointmentCard: {
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '15px',
      textAlign: 'left',
      transition: 'transform 0.2s',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: '#333',
      marginBottom: '10px',
    },
    title1: {
      fontWeight: 'bold',
      fontSize: '1.2em',
      textDecoration: 'line-through',
      color: '#333',
      marginBottom: '10px',
    },
    reason: {
      color: '#777',
      marginBottom: '5px',
    },
    date: {
      fontSize: '0.9em',
      color: '#888',
      marginBottom: '5px',
    },
    statusScheduled: {
      color: '#0066cc',
      fontWeight: 'bold',
    },
    statusCompleted: {
      color: '#28a745',
      fontWeight: 'bold',
    },
    button: {
      marginTop: '10px',
      padding: '8px 15px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    completedCount: {
      fontSize: '1.1em',
      fontWeight: 'bold',
      marginTop: '30px',
    },
  };

  const markAsCompleted = (id) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appt =>
        appt.id === id ? { ...appt, status: 'completed' } : appt
      )
    );
  };

  // Separate scheduled and completed appointments
  const scheduledAppointments = appointments.filter(appt => appt.status === 'scheduled');
  const completedAppointments = appointments.filter(appt => appt.status === 'completed');

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Patient Appointments</h2>

      {scheduledAppointments.map((appointment) => (
        <div key={appointment.id} style={styles.appointmentCard}>
          <p style={styles.title}>{appointment.name}</p>
          <p style={styles.reason}>{appointment.reason}</p>
          <p style={styles.date}>Date: {appointment.date}</p>
          <p style={styles.statusScheduled}>
            Status: {appointment.status}
          </p>
          <button
            style={styles.button}
            onClick={() => markAsCompleted(appointment.id)}
          >
            Mark as Completed
          </button>
        </div>
      ))}

      {completedAppointments.map((appointment) => (
        <div key={appointment.id} style={styles.appointmentCard}>
          <p style={styles.title1}>{appointment.name}</p>
          <p style={styles.reason}>{appointment.reason}</p>
          <p style={styles.date}>Date: {appointment.date}</p>
          <p style={styles.statusCompleted}>
            Status: {appointment.status}
          </p>
        </div>
      ))}

      <h3 style={styles.completedCount}>Total Completed Appointments: {completedCount}</h3>
    </div>
  );
}

export default Appointments;
