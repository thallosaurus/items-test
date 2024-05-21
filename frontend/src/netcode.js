async function sendPostRequest(url, body) {
    const data = await fetch("/api" + url, {
        method: "POST",
        body: JSON.stringify(body)
    });

    return data.json();
}

async function sendGetRequest(url) {
    const data = await fetch("/api" + url);
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
    const data = await sendGetRequest("/users");
    return data
}

export function login(username, password) {
    console.log("Login", username)
    return new Promise((res, rej) => {
        sendPostRequest("/auth/login", {
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
        sendPostRequest("/auth/register", {
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
        sendGetRequest("/items")
        .then(res)
        .catch(rej);
    })
}

export function getItemById(id) {
    return new Promise((res, rej) => {
        sendGetRequest("/items/" + id)
        .then(res)
        .catch(rej);
    })
}

export function addNewItem(itemName) {
    return new Promise((res, rej) => {
        sendPostRequest("/items", {
            name: itemName
        })
        .then(data => {
            res(data);
        }).catch(e => {
            rej(e);
        });
    })
}

export function search(query) {
    return new Promise((res, rej) => {
        sendGetRequest("/search?query="+query).then(res).catch(rej);
    })
}