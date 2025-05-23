import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', formData);
      if (response.data.user) {
        alert('Login successful!');
        localStorage.setItem('user', JSON.stringify(response.data.user)); 
        navigate('/home');
      } else {
        alert('Unexpected response format.');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.status === 400) {
        if (error.response.data.msg === 'User not found') {
          alert('User not found, redirecting to registration.');
          navigate('/signup');
        } else {
          alert(error.response.data.msg);
        }
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back!</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.footerText}>
          Don’t have an account? <a href="/signup" style={styles.link}>Register here</a>.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: "rgba(0, 0, 0, 0.1)",
    padding: '0 20px',
  },
  card: {
    background: "rgba(0, 0, 0, 0.1)", // Transparent glass effect
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    margin: '12px 0',
    padding: '12px',
    width: '100%',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    outline: 'none',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(8px)',
    textAlign: 'center',
  },
  button: {
    marginTop: '20px',
    padding: '12px 0',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '17px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease',
    width: '100%',
  },
  footerText: {
    marginTop: '20px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
  },
  link: {
    color: '#FFD700',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

// Animations
styles.card[':hover'] = {
  transform: 'translateY(-5px)',
  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
};
styles.input[':focus'] = {
  border: '2px solid #FFD700',
};
styles.button[':hover'] = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  transform: 'scale(1.05)',
};

export default Login;
