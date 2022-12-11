const baseURL = 'https://040d-109-166-138-142.eu.ngrok.io';
const threads = '/threads';
const accounts = '/accounts';

const allPostsEndpoint = `${baseURL}${threads}/getall`;
const updatePost = `${baseURL}${threads}/update`;

const createAcc = `${baseURL}${accounts}/create`;
const updateAcc = `${baseURL}${accounts}/update`;

const requestLogin = `${baseURL}/login`;
const createPost = `${baseURL}/create`;


export const getUsersEndpoint = async function () {
    const res = await fetch(allPostsEndpoint, {
        method: 'GET', headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        }
    });

    const data = await res.json();

    console.log(data);

    return data;
};

export const requestLoginUser = async function (username, pass) {
    const data = await fetch(requestLogin, {
        method: 'POST', body: JSON.stringify(username, pass), headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        }
    })
    return data === null ? 'Succes' : 'Failed';
};


export const updateThread = async function (title, body, tag) {
    const data = await fetch(updatePost, {
        method: 'UPDATE', body: JSON.stringify(title, body, tag), headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        }
    })
    return data === null ? 'Succes' : 'Failed';
}


export const createThread = async function (title, author, tag, body) {
    const data = await fetch(createPost, {
        method: 'CREATE', body: JSON.stringify(title, author, body, tag), headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        }
    })
    return data === null ? 'Succes' : 'Failed';
}

export const createAccount = async function (first_name, last_name, username, email, password, phone, account_type, country, state, city, zipcode) {
    const data = await fetch(createAcc, {
        method: 'CREATE', body: JSON.stringify(first_name, last_name, username, email, password, phone, account_type, country, state, city, zipcode), headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        }
    })
    return data === null ? 'Succes' : 'Failed';
}

export const updateAccount = async function (inputs) {
    const data = await fetch(createAcc, {
        method: 'UPDATE', body: JSON.stringify([...inputs]), headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        }
    })
    return data === null ? 'Succes' : 'Failed';
}