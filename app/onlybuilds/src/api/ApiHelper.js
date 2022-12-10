const baseURL = 'https://4b42-82-79-151-78.eu.ngrok.io';
const allPostsEndpoint = `${baseURL}/threads/getall`;


const ApiHelper = {

    getUsersEndpoint: async function () {
        const data = await fetch(allPostsEndpoint, { method: 'GET' });
        return data;
    }
};


export default ApiHelper;