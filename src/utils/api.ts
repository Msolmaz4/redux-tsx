import axios from 'axios'
//burada temel yapiyi kurariz


export default axios.create({
    baseURL:'http://expensetracker-be.herokuapp.com'
})