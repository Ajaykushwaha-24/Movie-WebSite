import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';

const FALLBACK_POSTER =
  'https://via.placeholder.com/300x445/141414/e50914?text=No+Poster';

function Card1(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openDetails = (item) => {
    setSelectedMovie(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="movie-grid">
        {props.data.map((movie, index) => (
          <div
            className="movie-card"
            key={movie.imdbID}
            style={{ animationDelay: `${Math.min(index, 12) * 0.05}s` }}
            onClick={() => openDetails(movie)}
          >
            <div className="movie-card__poster-wrap">
              <img
                className="movie-card__poster"
                src={movie.Poster !== 'N/A' ? movie.Poster : FALLBACK_POSTER}
                alt={movie.Title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = FALLBACK_POSTER;
                }}
              />
              <span className="movie-card__badge">{movie.Type}</span>
              <div className="movie-card__overlay">
                <div className="movie-card__play">▶</div>
                <h3 className="movie-card__title">{movie.Title}</h3>
                <p className="movie-card__meta">
                  <span>{movie.Year}</span>
                </p>
                <button className="movie-card__more">More Info</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered contentClassName="movie-modal">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>{selectedMovie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && (
            <>
              <img
                src={
                  selectedMovie.Poster !== 'N/A' ? selectedMovie.Poster : FALLBACK_POSTER
                }
                alt={selectedMovie.Title}
                className="movie-modal__poster"
              />
              <div className="movie-modal__row">
                <span className="movie-modal__label">Year</span>
                <span className="movie-modal__value">{selectedMovie.Year}</span>
              </div>
              <div className="movie-modal__row">
                <span className="movie-modal__label">Type</span>
                <span className="movie-modal__value" style={{ textTransform: 'capitalize' }}>{selectedMovie.Type}</span>
              </div>
              <div className="movie-modal__row">
                <span className="movie-modal__label">IMDB ID</span>
                <span className="movie-modal__value">{selectedMovie.imdbID}</span>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Card1;
