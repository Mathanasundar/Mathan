import React, { useState, useEffect, useRef } from "react";

const File = () => {
  const [userName, setUserName] = useState("");
  const [inTime, setInTime] = useState("");
  const [outTime, setOutTime] = useState("");
  const [trainingName, setTrainingName] = useState("");
  const [topicName, setTopicName] = useState("");
  const [topicStatus, setTopicStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState({});
  const loadRef = useRef("");

  useEffect(() => {
    loadRef.current.focus();
  }, []);

  const handleTopicStatusChange = (e) => {
    setTopicStatus(e.target.value);
  };

  // Input validation function
  const validateForm = () => {
    const validationErrors = {};
    if (!userName) validationErrors.userName = "Candidate name is required.";
    if (!inTime) validationErrors.inTime = "In-Time is required.";
    if (!outTime) validationErrors.outTime = "Out-Time is required.";
    if (!trainingName) validationErrors.trainingName = "Training Name is required.";
    if (!topicName) validationErrors.topicName = "Topic Name is required.";
    if (!topicStatus) validationErrors.topicStatus = "Topic Status is required.";
    if (!startDate) validationErrors.startDate = "Start Date is required.";
    if (!endDate) validationErrors.endDate = "End Date is required.";

    return validationErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();

    // If there are any validation errors, show them and stop form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors if form is valid
    setErrors({});

    const newFormData = {
      userName,
      inTime,
      outTime,
      trainingName,
      topicName,
      topicStatus,
      startDate,
      endDate,
    };

    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: newFormData }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        resetForm();
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  const resetForm = () => {
    setUserName("");
    setInTime("");
    setOutTime("");
    setTrainingName("");
    setTopicName("");
    setTopicStatus("");
    setStartDate("");
    setEndDate("");
    setErrors({});
  };

  return (
    <div style={styles.done}>
      <h2 style={styles.header}>Candidate Training Information</h2>

      {Object.keys(errors).length > 0 && (
        <div style={styles.errorSummary}>
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

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
        {errors.userName && <span style={styles.errorText}>{errors.userName}</span>}
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
        {errors.inTime && <span style={styles.errorText}>{errors.inTime}</span>}
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
        {errors.outTime && <span style={styles.errorText}>{errors.outTime}</span>}
      </div>

      <div style={styles.report}>
        <label htmlFor="traininginput" style={styles.label}>Training Name:</label>
        <select
          id="traininginput"
          value={trainingName}
          onChange={(e) => setTrainingName(e.target.value)}
          style={styles.input}
        >
          <option value="">--Select Training--</option>
          <option value="Post Graduate Program in Data Science with Artificial Intelligence and Machine Learning">Post Graduate Program in Data Science with Artificial Intelligence and Machine Learning</option>
          <option value="Post Graduate Program in Data Analytics with Machine Learning">Post Graduate Program in Data Analytics with Machine Learning</option>
          <option value="Post Graduate Programme in Cloud Computing with AWS and GCP">Post Graduate Programme in Cloud Computing with AWS and GCP</option>
          <option value="Post Graduate Programme in Cyber Security">Post Graduate Programme in Cyber Security</option>
          <option value="Post Graduate Programme in DevOPS">Post Graduate Programme in DevOPS</option>
          <option value="Post Graduate Program in Web Development">Post Graduate Program in Web Development</option>
          <option value="Post Graduate Program in Manual Testing and Automation Testing">Post Graduate Program in Manual Testing and Automation Testing</option>
          <option value="Post Graduate Program in Java">Post Graduate Program in Java</option>
          <option value="Post Graduate Program in Javascript Web Development">Post Graduate Program in Javascript Web Development</option>
          <option value="Post Graduate Program in Python Programming">Post Graduate Program in Python Programming</option>
          <option value="Post Graduate Program in React JS">Post Graduate Program in React JS</option>
          <option value="Post Graduate Program in React Native Mobile Application Development">Post Graduate Program in React Native Mobile Application Development</option>
        </select>
        {errors.trainingName && <span style={styles.errorText}>{errors.trainingName}</span>}
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
        {errors.topicName && <span style={styles.errorText}>{errors.topicName}</span>}
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
        {errors.topicStatus && <span style={styles.errorText}>{errors.topicStatus}</span>}
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
        {errors.startDate && <span style={styles.errorText}>{errors.startDate}</span>}
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
        {errors.endDate && <span style={styles.errorText}>{errors.endDate}</span>}
      </div>

      <button style={styles.click} onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const styles = {
  done: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'yellow',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  report: {
    marginBottom: '18px',
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
  errorSummary: {
    backgroundColor: 'red',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
  },
  errorText: {
    color: 'solid black',
    fontSize: '12px',
    marginTop: '5px',
    display: 'block',
  },
};

export default File;
