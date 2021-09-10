import React, {useState, useEffect} from 'react'

export const Fetch2 = () => {
  // MANEJAR LOS ESTADOS PARA CADA VALOR
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [repos, setRepos] = useState('')
  const [avatar, setAvatar] = useState('')
  const [input, setInput] = useState('Example')
  const [error, setError] = useState('')

  const dataGitHub = {
    avatar_url: "https://avatars.githubusercontent.com/u/60376045?v=4",
    bio: "Fullstack software developer  \r\nInformation Systems Specialist",
    blog: "https://clasesucatmarlon.github.io/portafolioMG/",
    company: null,
    created_at: "2020-01-28T04:06:57Z",
    email: null,
    followers: 26,
    followers_url: "https://api.github.com/users/clasesucatmarlon/followers",
    following: 27,
    following_url: "https://api.github.com/users/clasesucatmarlon/following{/other_user}",
    gists_url: "https://api.github.com/users/clasesucatmarlon/gists{/gist_id}",
    html_url: "https://github.com/clasesucatmarlon",
    id: 60376045,
    location: "Medellín",
    login: "clasesucatmarlon",
    name: "Marlon Aurelio García Morales",
    organizations_url: "https://api.github.com/users/clasesucatmarlon/orgs",
    public_gists: 1,
    public_repos: 66,
    repos_url: "https://api.github.com/users/clasesucatmarlon/repos",
    twitter_username: "garciamarlon",
    updated_at: "2021-09-10T13:21:12Z",
  }
  
  // const [user, setUser] = useState([])
  useEffect( () => {
      //cargarUsuario(input);
    }, [])
    
  const setData = ({name, login, followers, following, public_repos, avatar_url}) => {
    setName(name)
    setUserName(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
  }

  /* const cargarUsuario = async (input) => {
    const url = `https://api.github.com/users/${input}`
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)
    setData(data)
  } */

  /* const handleSearch = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  } */

  /* const handleSubmit = (e) => {
    e.preventDefault()
    console.log('se envioooooo', input)
    cargarUsuario(input)
  } */

  /* return (
    <div className="container">
        <h2>API CON FETCH</h2>
        <form onSubmit={handleSubmit}>
        <label>Usuario a buscar: </label>
        <input 
        onChange={handleSearch}
        type="text"
        placeholder="GitHub user" 
        />
        <button >Buscar</button>
        <p>name: {dataGitHub.name}</p>
        <p>userName: {userName}</p>
        <p>followers: {followers}</p>
        <p>following: {following}</p>
        <p>repos: {repos}</p>
        <p>avatar: {avatar}</p>
        </form>
        </div>
        ) */
        
  return (
    <div className="container">
      <h2>API CON FETCH</h2>
      
      <div className="card-container">
        <img className="round" src={dataGitHub.avatar_url} alt="user" />
        <h3>{dataGitHub.name}</h3>
        <h6>{dataGitHub.location}</h6>
        <p><span>Username:</span> {dataGitHub.login}</p>
      
        <div className="infor">
          <h6>Information</h6>
          <ul>
            <li><span>Followers:</span> {dataGitHub.followers}</li>
            <li><span>Followings:</span> {dataGitHub.following}</li>
            <li><span>Repositories:</span> {dataGitHub.public_repos}</li>
          </ul>
        </div>
      </div> 




    </div>
  )



}
