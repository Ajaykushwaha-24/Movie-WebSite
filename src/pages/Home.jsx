import { useState, useEffect } from "react";
import Card1 from "../component/Card";
import axios from 'axios';
import '../App.css';
import MyNavbar from "../component/nav";

function Home() {
  const [year, setYear] = useState("All Years");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  async function getMovies() {
    setLoading(true);
    setHasSearched(true);
    try {
      const url = `https://www.omdbapi.com/?apikey=4e9e8ed7&s=${searchText || "series"}${year && year !== "All Years" ? `&y=${year}` : ""}`;
      const response = await axios.get(url);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("API call failed", error);
      setMovies([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [year]);

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const heroPoster = movies.find((m) => m.Poster && m.Poster !== "N/A");

  return (
    <>
      <MyNavbar searchText={searchText} setSearchText={setSearchText} onSearch={() => getMovies()} />

      <section className="hero" style={heroPoster ? { backgroundImage: `url(${heroPoster.Poster})` } : undefined}>
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">
            Unlimited movies, shows &amp; more
          </h1>
          <p className="hero__subtitle">
            Search across thousands of titles and find your next watch.
          </p>

          <div className="filter-bar">
            <label htmlFor="year_button" className="filter-label">Filter by year</label>
            <select value={year} onChange={handleChange} id="year_button">
              <option value="All Years">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </div>
        </div>
      </section>

      <main className="content-section" id="gallery">
        <h2 className="section-title">
          {searchText ? `Results for "${searchText}"` : "Trending Now"}
        </h2>

        {loading && (
          <div className="movie-grid">
            {Array.from({ length: 10 }).map((_, i) => (
              <div className="skeleton-card" key={i} />
            ))}
          </div>
        )}

        {!loading && movies.length === 0 && hasSearched && (
          <div className="empty-state">
            <p>No movies found. Try a different title or year.</p>
          </div>
        )}

        {!loading && movies.length > 0 && <Card1 data={movies} />}
      </main>
    </>
  );
}

export default Home;
