import React, { useState, useEffect, useRef } from "react";

const Next = () => {
  const [userName, setUserName] = useState("");
  const [trainingName, setTrainingName] = useState(""); 
  const [startDate, setStartDate] = useState("");
  const [formDataArray, setFormDataArray] = useState([]);
  const loadRef = useRef("");

  useEffect(() => {
      loadRef.current.focus();
    }, []);
  
    const handleSubmit = async () => {
      if (!userName || !trainingName  ) {
        alert("Please fill all required fields.");
        return;
      }

      const newFormData = {
        userName,
        trainingName,
        startDate,
      };
  
      setFormDataArray((prevArray) => [...prevArray, newFormData]);
  
      try {

        const response = await fetch('http://localhost:5000/api/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formData: formDataArray }),
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
        setTrainingName("");
        setStartDate("");    
      };

      return (
        <div style={styles.done}>
          <h2 style={styles.header}><u>Candidate Training Information</u></h2>
    
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
        <label htmlFor="traininginput" style={styles.label}>Training Name:</label>
        <select
          id="traininginput"
          type="text"
          placeholder="e.g., 'Post Graduate Program in Java'"
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

      <button style= {styles.click} onClick={handleSubmit}>Submit</button>

      <div style={{ marginTop: "20px" }}>
        <h3>Submitted Data:</h3>
        <pre>{JSON.stringify(formDataArray, null, 2)}</pre>
      </div>
    </div>  
  );
};

const styles = {
    done: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'lightblue',
      borderRadius: '8px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    report: {
        marginBottom: '18px',
      },

      input: {
        width: '100%',
        padding: '8px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginBottom: '10px',
      },

      click: {
        display: 'block',
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
      
    };

    export default Next;
    


    
    
  