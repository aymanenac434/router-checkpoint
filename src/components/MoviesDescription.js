import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MoviesData from "./MoviesData";


function MovieDescription({ movies }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const onBackClick = () => {
        navigate('/');
    };

    const movie = MoviesData.find(movie => movie.id === parseInt(id));
    return (
        <>
            <div className="mt-5">
                <h2>{movie.title}</h2>
                <iframe
					title={movie.title}
					width="560"
					height="315"
					src={movie.trailerLink}
					frameBorder="0"
					allowFullScreen
				></iframe>
                <button onClick={onBackClick}>Back to Home</button>
                {/* {MoviesData  && (<div> 
                    <h2>{movie.title}</h2>
				<p>{MoviesData.description}</p>
				<iframe
					title={MoviesData.title}
					width="560"
					height="315"
					src={MoviesData.trailerLink}
					frameBorder="0"
					allowFullScreen
				></iframe> */}


            </div>
        </>
    );
}

export default MovieDescription;