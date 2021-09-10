import React, {useState, useEffect} from 'react'

export const Fetch = () => {
  // MANEJAR LOS ESTADOS PARA CADA VALOR
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [repos, setRepos] = useState('')
  const [avatar, setAvatar] = useState('')
  const [location, setLocation] = useState('')
  const [input, setInput] = useState('Example')
  const [error, setError] = useState('')
  
  // const [user, setUser] = useState([])
  useEffect( () => {
    // const cargarUsuario = async () => {
    //     const urlExample = 'https://api.github.com/users/example'
    //     const resp = await fetch(urlExample);
    //     const data = await resp.json();
    //     setData(data)
        // setName(data.name)
        // setUserName(data.login)
        // setFollowers(data.followers)
        // setFollowing(data.following)
        // setRepos(data.public_repos)
        // setAvatar(data.avatar_url)
      //}
      cargarUsuario(input);
    }, [])
    
  const setData = ({name, login, followers, following, public_repos, avatar_url, location}) => {
    setName(name)
    setUserName(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
    setLocation(location)
  }

  const cargarUsuario = async (input) => {
    const url = `https://api.github.com/users/${input}`
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data)
    setData(data)
  }

  const handleSearch = (e) => {
    setInput(e.target.value)
    //console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log('se envioooooo', input)
    cargarUsuario(input)
  }

  return (
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
        </form>

        <div className="card-container">
        <img className="round" src={avatar} alt="user" />
        <h3>{name}</h3>
        <h6>{location}</h6>
        <p><span>Username:</span> {userName}</p>
      
        <div className="infor">
          <h6>Information</h6>
          <ul>
            <li><span>Followers:</span> {followers}</li>
            <li><span>Followings:</span> {following}</li>
            <li><span>Repositories:</span> {repos}</li>
          </ul>
        </div>
      </div> 
      </div>
  )
}
