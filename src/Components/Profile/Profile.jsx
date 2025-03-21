import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signup, login } from '../../Reducers/authReducers';
import "./Profile.css";
import culinaryLogo from "../Images/Logo-bg.png";
import image1 from "../Fun-Fusion/Jhatpat-recipes/image1.png";
import image2 from "../Fun-Fusion/Jhatpat-recipes/image2.png";
import image3 from "../Fun-Fusion/Jhatpat-recipes/image3.png";
import image4 from "../Fun-Fusion/Jhatpat-recipes/image4.png";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const user = useSelector((state) => state.auth.user);

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (/\s/.test(username)) {
      alert("Username cannot contain spaces");
      return;
    }

    dispatch(signup({ username, email, password }));
    alert('Signup successful! Please log in.');

    setUsername("");
    setEmail("");
    setPassword("");
    setIsSignUpMode(false);
  };

  // Handle Login
  const handleLogin = useCallback((e) => {
    e.preventDefault();
    
    if (!user) {
      alert('No user found. Please sign up first.');
      return;
    }

    const { username, password } = credentials;
    if (username === user.username && password === user.password) {
      dispatch(login({ username, password }));
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  }, [credentials, user, dispatch, navigate]);

  // Toggle between Login and Signup modes
  const toggleMode = useCallback(() => {
    setIsSignUpMode((prevMode) => !prevMode);
    setUsername("");
    setEmail("");
    setPassword("");
    setCredentials({ username: "", password: "" });
  }, []);

  // Handle Input Change
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleInputFocus = (e) => {
    e.target.classList.add("active");
  };

  const handleInputBlur = (e) => {
    if (e.target.value === "") {
      e.target.classList.remove("active");
    }
  };

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {/* Sign In Form */}
            <form onSubmit={handleLogin} autoComplete="off" className="sign-in-form">
              <div className="logo">
                <img src={culinaryLogo} alt="Logo" />
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registered yet?</h6>
                <a href="#" className="toggle" onClick={toggleMode}>
                  Sign up
                </a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    autoComplete="off"
                    required
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Username</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    className="input-field"
                    autoComplete="off"
                    required
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Password</label>
                </div>

                <button type="submit" className="sign-btn">
                  Sign In
                </button>

                <p className="text">
                  Forgotten your password? <a href="#">Get help</a>
                </p>
              </div>
            </form>

            {/* Sign Up Form */}
            <form onSubmit={handleSignup} autoComplete="off" className="sign-up-form">
              <div className="logo">
                <img src={culinaryLogo} alt="Logo" />
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="#" className="toggle" onClick={toggleMode}>
                  Sign in
                </a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Username</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Password</label>
                </div>

                <button type="submit" className="sign-btn">
                  Sign Up
                </button>

                <p className="text">
                  By signing up, I agree to the <a href="#">Terms & Conditions</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-slides">
              <div className="vertical-flow">
                <div className="flow-item">
                  <div className="image-circle">
                    <img src={image1} alt="Recipe 1" className="flow-image" />
                  </div>
                  <div className="connecting-lines">
                    <div className="line-horizontal"></div>
                  </div>
                </div>
                <div className="flow-item">
                  <div className="image-circle">
                    <img src={image2} alt="Recipe 2" className="flow-image" />
                  </div>
                  <div className="connecting-lines">
                    <div className="line-horizontal"></div>
                  </div>
                </div>
                <div className="flow-item">
                  <div className="image-circle">
                    <img src={image3} alt="Recipe 3" className="flow-image" />
                  </div>
                  <div className="connecting-lines">
                    <div className="line-horizontal"></div>
                  </div>
                </div>
              </div>
              <div className="main-image-container">
                <div className="main-circle">
                  <img src={image4} alt="Main Recipe" className="main-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;