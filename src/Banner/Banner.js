import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../Collection/axios";
import request from "../Collection/request";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [playholder, setplayer] = useState("Play");


  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchActionMovies);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const opts = {
    height: "560",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
const handleClick = (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
    setplayer("play");
  } else {
    movieTrailer(movie?.original_name || movie?.title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
        setplayer("stop");
      })
      .catch((error) => console.log(error));
  }
};
  

return (
  <header
    className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }}
  >
    <div className="wrap">
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => handleClick(movie)}>
            {playholder}
          </button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="row_youtube">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
    <div className="banner_fadeBottom" ></div>
  </header>
);
}

export default Banner;

  // function handleClick(movie) {
  //   axios
  //     .get(request.fetchActionMovies)
  //     .then((response) => {
  //       if (response.data.results.length !== 0) {
  //         setTrailerUrl(response.data.results[0].key);
  //       } else {
  //         console.log("Trailer not available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//       }}
//     >
      
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button" onClick={() => handleClick(movie)}>
//             Play
//           </button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
//       </div>
//       <div className="banner_fadeBottom" />
//       <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </header>
//   );
// }

// export default Banner;

// import React, { useEffect, useState } from "react";
// import "./Banner.css";
// import axios from "./axios";
// import request from "./request";
// import YouTube from "react-youtube";

// function Banner() {
//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const requests = await axios.get(request.fetchNetflexOriginals);
//       setMovie(
//         requests?.data.results[
//           Math.floor(Math.random() * requests.data.results.length)
//         ]
//       );
//       return requests;
//     }
//     fetchData();
//   }, []);
// console.log(movie);
//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//         // `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//         // backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button" onClick={() => handleClick(movie)}>
//             Play
//           </button>
//           <button className="banner_button" onClick={() => handleClick(movie)}>
//             My List
//           </button>
//         </div>
//         <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
//       </div>
//       <div className="banner_fadeBottom" />
//       <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </header>
//   );
// }

// export default Banner;

// import React, { useRef } from "react";

// function VideoPlayer() {
//   const videoRef = useRef(null);

//   const playVideo = () => {
//     videoRef.current.play();
//   };

//   return (
//     <div>
//       <video ref={videoRef} src="path_to_video.mp4" />
//       <button onClick={playVideo}>Play Video</button>
//     </div>
//   );
// }

// export default VideoPlayer;

// import React, { useEffect, useState } from "react";
// import "./Banner.css";
// import axios from "./axios";
// import request from "./request";
// function Banner() {
//   const [movie, setMovies] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const requests = await axios.get(request.fetchNetflexOriginals);
//       setMovies(
//         requests?.data.results[
//           Math.floor(Math.random() * requests.data.results.length)
//         ]
//       );
//       return request;
//     }
//     fetchData();
//   }, []);
//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   console.log(movie);
//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("http://image.tmdb.org/t/p/w500/"${movie?.backdrop_path}")`,
//         backgroundPostion: "center center",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie.orginal_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button">play</button>
//           <div className="banner_buttons">
//             <button className="banner_button">My List</button>
//           </div>
//           <h1 className="banner_description">
//             {truncate(movie?.overview, 150)}
//           </h1>
//         </div>
//         <div className="banner_fedeBottom" />
//       </div>
//     </header>
//   );
// }

// export default Banner;
