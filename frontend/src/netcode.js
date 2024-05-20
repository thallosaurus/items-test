async function sendPostRequest(url, body) {
    const data = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
    });

    return data.json();
}

async function sendGetRequest(url) {
    const data = await fetch(url);
    return data.json();
}

export function logout() {
    console.log("Logout");

    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, 5000);
    })
}

export async function getUsers() {
    const data = await sendGetRequest("http://localhost:8080/users");
    return data
}

export function login(username, password) {
    console.log("Login", username)
    return new Promise((res, rej) => {
        sendPostRequest("http://localhost:8080/login", {
            username, password
        }).then(data => {
            res(data);
        }).catch(e => {
            rej(e)
        });
    });
}

export function register(username, password) {
    return new Promise((res, rej) => {
        sendPostRequest("http://localhost:8080/register", {
            username, password
        }).then(data => {
            res(data);
        }).catch(e => {
            rej(e)
        });
    });
}

export function getItems() {
    return new Promise((res, rej) => {
        sendGetRequest("http://localhost:8080/items")
        .then(res)
        .catch(rej);
    })
}

export function getItemById(id) {
    return new Promise((res, rej) => {
        sendGetRequest("http://localhost:8080/items/" + id)
        .then(res)
        .catch(rej);
    })
}

export function addNewItem(itemName) {
    return new Promise((res, rej) => {
        sendPostRequest("http://localhost:8080/items", {
            name: itemName
        })
        .then(data => {
            res(data);
        }).catch(e => {
            rej(e);
        });
    })
}