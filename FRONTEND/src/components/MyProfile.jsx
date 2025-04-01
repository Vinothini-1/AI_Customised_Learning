import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SkillsContext } from "../context/SkillsContext"; 
import axios from "axios";

const MyProfile = () => {
  const { interestedSkills, setInterestedSkills } = useContext(SkillsContext);
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("ABC");
  const [email, setEmail] = useState("abc.com");
  const [location, setLocation] = useState("Pune, Maharashtra");
  const [skills, setSkills] = useState(["JavaScript", "React"]);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    const userDetails = {
      name,
      email,
      location,
      skills,
      interestedSkills,
    };

    axios.post("http://localhost:3001/api/profile", userDetails)
      .then(response => {
        setSuccessMessage("Profile saved successfully!");
      })
      .catch(error => {
        setSuccessMessage("Error saving profile. Please try again.");
      });

    setInterestedSkills(interestedSkills);
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <img
              src={profilePic || "https://www.w3schools.com/howto/img_avatar.png"}
              alt="User Profile"
              style={styles.profileImage}
            />
            {isEditing && (
              <div style={{ marginTop: "10px" }}>
                <label style={styles.fileLabel}>
                  Choose File
                  <input type="file" onChange={handleProfilePicChange} style={styles.fileInput} />
                </label>
              </div>
            )}
          </div>

          {/* Username */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Username:</label>
            {isEditing ? (
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
            ) : (
              <span>{name}</span>
            )}
          </div>

          {/* Email */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Email:</label>
            {isEditing ? (
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
            ) : (
              <span>{email}</span>
            )}
          </div>

          {/* Location */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Location:</label>
            {isEditing ? (
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={styles.input} />
            ) : (
              <span>{location}</span>
            )}
          </div>

          {/* Skills */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Skills:</label>
            {isEditing ? (
              <input
                type="text"
                value={skills.join(", ")}
                onChange={(e) => setSkills(e.target.value.split(",").map((s) => s.trim()))}
                style={styles.input}
              />
            ) : (
              <ul style={styles.list}>{skills.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
            )}
          </div>

          {/* Interested Skills */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Interested Skills:</label>
            {isEditing ? (
              <input
                type="text"
                value={interestedSkills.join(", ")}
                onChange={(e) => setInterestedSkills(e.target.value.split(",").map((s) => s.trim()))}
                style={styles.input}
              />
            ) : (
              <ul style={styles.list}>{interestedSkills.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
            )}
          </div>

          {isEditing ? (
            <button onClick={handleSave} style={styles.saveButton}>Save</button>
          ) : (
            <button onClick={() => setIsEditing(true)} style={styles.editButton}>Edit</button>
          )}

          {/* Success Message */}
          {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.1)",
  },
  card: {
    maxWidth: "500px",
    width: "90%",
    backdropFilter: "blur(10px)",
    background: "rgba(66, 50, 186, 0.2)",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    textAlign: "center",
    transition: "transform 0.3s ease",
  },
  imageContainer: {
    textAlign: "center",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "3px solid rgba(255, 255, 255, 0.5)",
    objectFit: "cover",
    marginBottom: "10px",
  },
  fileLabel: {
    padding: "6px 12px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "inline-block",
  },
  fileInput: {
    display: "none",
  },
  inputContainer: {
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "none",
    borderRadius: "5px",
    background: "rgba(255, 255, 255, 0.3)",
    color: "#fff",
    outline: "none",
  },
  list: {
    paddingLeft: "0",
    listStyle: "none",
  },
  saveButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "0.3s",
  },
  editButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "0.3s",
  },
  successMessage: {
    color: "#0f0",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default MyProfile;
