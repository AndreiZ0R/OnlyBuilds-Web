const baseURL = 'https://4b42-82-79-151-78.eu.ngrok.io';
const threads = '/threads';
const accounts = '/accounts';

const allPostsEndpoint = `${baseURL}${threads}/getall`;
const updatePost = `${baseURL}${threads}/update`;

const createAcc = `${baseURL}${accounts}/create`;
const updateAcc = `${baseURL}${accounts}/update`;

const requestLogin = `${baseURL}/login`;
const createPost = `${baseURL}/create`;



const ApiHelper = {

    getUsersEndpoint: async function () {
        const data = await fetch(allPostsEndpoint, { method: 'GET' });
        return data;
    },

    requestLoginUser: async function (username, pass) {
        const data = await fetch(requestLogin, { method: 'POST', body: JSON.stringify(username, pass) })
        return data === null ? 'Succes' : 'Failed';
    },

    updateThread: async function (title, body, tag) {
        const data = await fetch(updatePost, { method: 'UPDATE', body: JSON.stringify(title, body, tag) })
        return data === null ? 'Succes' : 'Failed';
    },

    createThread: async function (title, author, tag, body) {
        const data = await fetch(createPost, { method: 'CREATE', body: JSON.stringify(title, author, body, tag) })
        return data === null ? 'Succes' : 'Failed';
    },

    createAccount: async function (first_name, last_name, username, email, password, phone, account_type, country, state, city, zipcode) {
        const data = await fetch(createAcc, { method: 'CREATE', body: JSON.stringify(first_name, last_name, username, email, password, phone, account_type, country, state, city, zipcode) })
        return data === null ? 'Succes' : 'Failed';
    },

    updateAccount: async function (inputs) {
        const data = await fetch(createAcc, { method: 'UPDATE', body: JSON.stringify([...inputs]) })
        return data === null ? 'Succes' : 'Failed';
    }
};


export default ApiHelper;