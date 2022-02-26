import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovives] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovives(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          {movies.map((item) => (
            <div key={item.id}>
              <img src={item.medium_cover_image}></img>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <ul>
                {item.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

// fetch(
//   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
// )
//   .then((response) => response.json())
//   .then((json) => {
//     setMovives(json);
//     setLoading(false);
//   });
