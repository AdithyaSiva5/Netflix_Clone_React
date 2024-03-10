import React,{useEffect,useState} from 'react'
import "./RowPost.css"
import axios from '../../axios'
import { API_KEY ,imageUrl} from '../../constants/constant'

function RowPost() {

  const [movies,setMovies] = useState([])

  useEffect(() => {
    axios
      .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
      .then((response) => {
        setMovies(response.data.results)
      })
      .catch((error) => {
        console.log("Cant get Outcome");
      });
  }, [])
  
  return (
    <div className="row">
      <h2>Netflix Orginals</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img className="poster" src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        ))}
      </div>
    </div>
  );
}

export default RowPost
