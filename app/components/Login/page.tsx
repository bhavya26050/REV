"use client";
import { useEffect, useState } from "react";
import { loginUser } from "../../services/apiService"; // Import the login function

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [apiError, setApiError] = useState(""); // Handle API errors
  const [successMessage, setSuccessMessage] = useState(""); // Handle success message

  useEffect(() => {
    if (emailError || passwordError || userError) {
      setFormValid(false);
    } else if (email && password && user && password.length >= 8 && user.length >= 8) {
      setFormValid(true);
    }
  }, [email, password, user, emailError, passwordError, userError]);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (formValid) {
      try {
        // Call the loginUser API
        const response = await loginUser(email, password);
        console.log("Login successful!", response);
        setSuccessMessage("Login successful!");
        setApiError("");

        // Store the token for further use (e.g., in localStorage or context)
        localStorage.setItem("token", response.token);

        // Reset form fields
        setUser("");
        setEmail("");
        setPassword("");
      } catch (error: any) {
        console.error("Error logging in:", error);
        setApiError(error.message || "Error logging in. Please try again.");
        setSuccessMessage("");
      }
    }
  };

  const validateUser = (user: string | any[]) => {
    if (user.length < 8) {
      setUserError("Username must be at least 8 characters long.");
    } else {
      setUserError("");
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 8 || !/[A-Z]/.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter."
      );
    } else {
      setPasswordError("");
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  return (
    <main className="justify-center flex py-20">
      <div className="justify-center flex px-52 py-48 h-full w-full">
        <form
          className="p-10 w-96 h-full bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-3xl text-gray-800 dark:text-gray-100 flex justify-center">
            LOGIN
          </h1>
          <br />
          {apiError && <p className="text-red-500">{apiError}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <input
            className="h-10 w-full mb-5 rounded-md px-3 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-600 transition-colors duration-300"
            type="text"
            placeholder="Username"
            name="user"
            value={user}
            required
            minLength={8}
            onChange={(event) => {
              setUser(event.target.value);
              validateUser(event.target.value);
            }}
          />
          {userError && <p className="text-red-500">{userError}</p>}

          <input
            className="h-10 w-full mb-5 rounded-md px-3 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-600 transition-colors duration-300"
            type="email"
            placeholder="Email"
            name="Email"
            value={email}
            required
            onChange={(event) => {
              setEmail(event.target.value);
              validateEmail(event.target.value);
            }}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}

          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={password}
            required
            minLength={8}
            className="h-10 w-full mb-10 rounded-md px-3 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-600 transition-colors duration-300"
            onChange={(event) => {
              setPassword(event.target.value);
              validatePassword(event.target.value);
            }}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}

          <button
            className={`bg-indigo-600 text-white font-bold py-2 px-2 rounded w-full mb-5 hover:bg-indigo-700 transition-colors ${
              !formValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!formValid}
          >
            Login
          </button>
          <p className="m-5 text-gray-800 dark:text-gray-200">
            <b>
              Don't have an account? <br />
              <a href="./Registration" className="text-indigo-600 dark:text-indigo-400">
                Create an account
              </a>
            </b>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
