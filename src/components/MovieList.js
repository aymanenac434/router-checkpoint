import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MoviesData from './MoviesData';

function MovieList() {
    return (
        <div>
            <h1>Movie List</h1>
            <hr />
            <div className="movie-list">
                {MoviesData.map((movie, index) => (
                    <div key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Link to={`description/${movie.id}`}>View Trailer</Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;

