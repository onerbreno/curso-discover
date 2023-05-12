// rodar node-api-discover

const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.log(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.log(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;chatset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.log(error))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "content-type": "application/json; chatset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.log(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error = console.log(error))
}

const newUser = {
    name: "breno",
    avatar: "https://source.unsplash.com/random/200x300",
    city: "Francisco Morato"
}

const updatedUser = {
    name: "jakeliny Gracielly",
    avatar: "https://avatars.githubusercontent.com/u/17316392?v=4",
    city: "São Paulo"
}

getUsers()
getUser(2)
// addUser(newUser)
// updateUser(updatedUser, 2)
deleteUser(5)
