
import { useState, useEffect } from "react";
import Card1 from "../component/Card";
import axios from 'axios';
import '../App.css';
import MyNavbar from "../component/nav";

function Home() {
  const [year, setYear] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");


 
    async function getMovies() {
      setLoading(true);
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

  return (
    <>
      <MyNavbar searchText={searchText} setSearchText={setSearchText} onSearch={() => getMovies()} />
      <div className="middle text-white p-4">
        <h1>Movies Released in: {year}</h1>
        <h4>Select Year or Movie Name</h4>
        <div  className="mb-4">
          <select value={year} onChange={handleChange} id="year_button" >
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
      <div className="movie-grid">
        {loading ? <p className="text-white">Loading movies...</p> : <Card1 data={movies} />}
      </div>
      {/* <MyNavbar searchText={searchText} setSearchText={setSearchText} onSearch={getMovies} /> */}
    </>
  );
}

export default Home;
