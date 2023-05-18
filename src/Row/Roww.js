import React, { useState, useEffect, useRef } from "react";
import "./Row.css";
import axios from "../Collection/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Button from "react-bootstrap/Button";

const base_url = "http://image.tmdb.org/t/p/w500/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = { height: "390", width: "100%", playerVars: { autoplay: 1 } };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="row horizontal-scrollable">
        <h1>{title}</h1>
        <Carousel className="carousel">
          <Carousel.Item>
            <div className="row_posters">
              {movies.map((movie) => (
                <img
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              ))}
            </div>

            <div style={{ padding: "40px" }}>
              {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

// import React, { useState, useEffect, useRef } from "react";
// import "./Row.css"
// import axios from '../Collection/axios';
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// const base_url="http://image.tmdb.org/t/p/w500/"
// // const API_KEY="280e264b93fe1ea1032639f374f4ea88";

// export default function Row({ title, fetchUrl,isLargeRow }) {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl,setTrailerUrl]=useState("")
//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       // console.log(request);
//       setMovies(request.data.results);
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);
//   const opts = {height:"390",width:"100%",playerVars:{autoplay:1,},}
// const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie.original_name)
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   return (<>
//           <div className="row vertical-scrollable ">
//         <h1>{title}</h1>
//         <div className="row_posters" >
//         <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">

//           {movies.map((movie) => (
//             <img
//               key={movie.id}
//               onClick={() => handleClick(movie)}
//               className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//               src={`${base_url}${
//                 isLargeRow ? movie.poster_path : movie.backdrop_path
//               }`}
//               alt={movie.name}
//             />
//           ))}
//            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
//         </div>
//       </div>
//      </div> </div>
//       <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </>
//   );
// }
