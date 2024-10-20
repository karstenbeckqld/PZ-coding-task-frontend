import axios from 'axios';

// The axios.create() method is used to create a new instance of axios with a custom configuration. This allows for a
// centralised configuration of the base URL for the API requests and cleaner code.
export default axios.create({
    baseURL: 'http://localhost:5009/api/'
});