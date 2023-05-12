// rodar node-api-discover

const url = "http://localhost:5500/api"


function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data.users)
    })
    .catch(error => console.log(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
        console.log(data)
    })
    .catch(error => console.log(error))
}

function addUser() {
    axios.post(url, newUser)
    .then(response => alertApi.textContent = response.data)
    .catch(error => console.log(error))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => alertApi.textContent = response.data)
    .catch(error => console.log(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => alertApi.textContent = response.data)
}

const newUser = {
    name: "breno",
    avatar: "https://source.unsplash.com/random/200x300",
    city: "São Paulo"
}
const userUpdated = {
    name: "João",
    avatar: "https://source.unsplash.com/random/200x300",
    city: "Rio de São Paulo"
}

getUsers()
getUser(1)
deleteUser(3)
// addUser()
// updateUser(1, userUpdated)