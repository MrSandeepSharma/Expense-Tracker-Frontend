import axios from "axios";

class databaseService {
    constructor() {
        this.url = "https://expense-tracker-backend-09ud.onrender.com/api/v1",
        this.token = localStorage.getItem("token")
    }

    async addExpenses(name, amount, category) {
        const expenseData = { name, amount, category }

        if (!this.token) {
            return "User not authenticated";
        }

        try {
            const response = await axios.post(`${this.url}/expense`, expenseData, {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json',
                }
            })
            return response.data;
        } catch (error) {
           return error.response.data.error; 
        }
    }

    async getExpenses() {
        if (!this.token) {
            return "User not authenticated";
        }

        try {
            const response = await axios.get(`${this.url}/expense`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json',
                }
            })

            return response.data;
        } catch (error) {
            return error.response.data.error; 
        }
    }

    async deleteExpense(expenseId) {
        if (!this.token) {
            return "User not authenticated";
        }

        try {
            const response = await axios.delete(`${this.url}/expense`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                },
                data: { expenseId }
            });
            return response.data.message;
        } catch (error) {
            return error.response.data.error; 
        }
    }
}

const database = new databaseService();

export { database };