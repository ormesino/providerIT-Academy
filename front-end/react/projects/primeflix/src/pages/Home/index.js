import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import api from '../../services/api';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: 'ae505c79ac6e602726dd10dcae3a0c69',
          language: 'pt-BR',
          page: 1,
        }
      });

      setMovies(response.data.results);
    };

    getMovies();
  }, []);

  return (
    <div className="container">
      <div className="movieList">
        {movies.map(movie => (
          <article key={movie.id}>
            <strong>{movie.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            <Link to={`/movie/${movie.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;