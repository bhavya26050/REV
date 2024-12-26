import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/users'; // Adjust the URL if your backend is running on a different port or path

// Function to register a new user
export const registerUser = async (name, email, password, role) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
            name,
            email,
            password,
            role,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Function to log in a user
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
