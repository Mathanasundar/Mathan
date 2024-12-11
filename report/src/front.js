import React, { useState, useEffect, useRef } from "react";

const Front = () => {
  const [userName, setUserName] = useState("");
  const [inTime, setInTime] = useState("");
  const [outTime, setOutTime] = useState("");
  const [trainingName, setTrainingName] = useState("");
  const [topicName, setTopicName] = useState("");
  const [topicStatus, setTopicStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const loadRef = useRef("");
  

  useEffect(() => {
    loadRef.current.focus();
  }, []);

  

  const handleTopicStatusChange = (e) => {
    setTopicStatus(e.target.value);
  };

  return (
    <div style={styles.done}>
      <h2 style={styles.header}>Candidate Training Information</h2>

      <div style={styles.formGroup}>
        <label htmlFor="nameinput" style={styles.label}>Candidate Name:</label>
        <input
          id="nameinput"
          type="text"
          placeholder="Type Your Name."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          ref={loadRef}
          style={styles.input}
        />
      </div>

      <div style={styles.report}>
        <label htmlFor="ininput" style={styles.label}>In-Time:</label>
        <input
          id="ininput"
          type="time"
          placeholder="HH:MM a.m/p.m"
          value={inTime}
          onChange={(e) => setInTime(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.report}>
        <label htmlFor="outinput" style={styles.label}>Out-Time:</label>
        <input
          id="outinput"
          type="time"
          placeholder="HH:MM a.m/p.m"
          value={outTime}
          onChange={(e) => setOutTime(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.report}>
        <label htmlFor="traininginput" style={styles.label}>Training Name:</label>
        <input
          id="traininginput"
          type="text"
          placeholder="e.g., 'Post Graduate Program in Java'"
          value={trainingName}
          onChange={(e) => setTrainingName(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.report}>
        <label htmlFor="topicinput" style={styles.label}>Topic Name:</label>
        <input
          id="topicinput"
          type="text"
          placeholder="Topic of your Training"
          value={topicName}
          onChange={(e) => setTopicName(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.report}>
        <label style={styles.label}>Topic Status:</label>
        <div style={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="topicStatus"
              value="On Going"
              checked={topicStatus === "On Going"}
              onChange={handleTopicStatusChange}
            />
            On Going
          </label>
          <label>
            <input
              type="radio"
              name="topicStatus"
              value="Completed"
              checked={topicStatus === "Completed"}
              onChange={handleTopicStatusChange}
            />
            Completed
          </label>
          <label>
            <input
              type="radio"
              name="topicStatus"
              value="Training Completed"
              checked={topicStatus === "Training Completed"}
              onChange={handleTopicStatusChange}
            />
            Training Completed
          </label>
        </div>
      </div>

      <div style={styles.report}>
        <label htmlFor="startdateinput" style={styles.label}>Start Date and Time:</label>
        <input
          id="startdateinput"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.report}>
        <label htmlFor="enddateinput" style={styles.label}>End Date and Time:</label>
        <input
          id="enddateinput"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={styles.input}
        />
      </div>

      <button style= {styles.click}>Submit</button>

      
    </div>
  );
};

const styles = {
  done: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'orange',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  report: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  radioGroup: {
    display: 'flex',
    gap: '15px',
  },
  click: {
    display: 'block',
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  
};

export default Front;
