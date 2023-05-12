// fetch('https://api.github.com/users/onerbreno')
// .then(response => response.json())
// .then(data => fetch(data.repos_url))
// .then(res => res.json())
// .then(d => console.log(d))
// .catch(err => console.log(err))

// async function start() {
//   const url = "https://api.github.com/users/onerbreno";
//   const user = await fetch(url).then((r) => r.json());
//   const repos = await fetch(user.repos_url).then((r) => r.json());
//   console.log(repos);
// }

// start()
//   .catch((e) => console.log(e))
//   .finally(() => console.log("finalizado"));

axios
  .get("https://api.github.com/users/onerbreno")
  .then((response) => axios.get(response.data.repos_url))
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));


async function fetchRepos() {
  const url = "https://api.github.com/users/onerbreno";
  const user = await axios.get(url);
  const repos = await axios.get(user.data.repos_url);
  console.log(repos.data);
}

fetchRepos().catch((e) => console.log(e));

