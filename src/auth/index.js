import axios from "axios";

class AuthService {
    constructor() {
        this.url = "https://expense-tracker-backend-09ud.onrender.com/api/v1";
        this.token = localStorage.getItem("token");
    }

    async registerUser(username, email, password) {
        const userData = { username, email, password };
        try {
            const response = await axios.post(`${this.url}/auth/register`, userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            localStorage.setItem('token', response.data.token);
            return response.data.response;
        } catch (error) {
            return error.response.data.error;
        }
    }

    async loginUser(email, password) {
        const userData = { email, password };
        try {
            const response = await axios.post(`${this.url}/auth/login`, userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            localStorage.setItem('token', response.data.token);

            return response.data.response;
        } catch (error) {
            return error.response.data.error;
        }
    }

    async logoutUser() {
        try {
            if (!this.token) {
                return false;
            }

            const response = await axios.post(`${this.url}/auth/logout`, {}, {
                headers: {
                    "Authorization": `Bearer ${this.token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response) {
                localStorage.removeItem("token");
                this.token = localStorage.getItem("token");
                return true;
            }
        } catch (error) {
            return error.response.data.error;
        }
    }

    async getCurrentUser() {
        try {
            if (!this.token) {
                return null;
            }

            const response = await axios.get(`${this.url}/auth/current-user`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json',
                },
            });
            
            return response.data;
        } catch (error) {
            return error.response.data.error;
        }
    }
}

const auth = new AuthService();

export { auth };