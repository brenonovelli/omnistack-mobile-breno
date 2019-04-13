import axios from 'axios';

const api = axios.create({
	baseURL: 'https://omnistack-backend-breno.herokuapp.com'
});

export default api;
