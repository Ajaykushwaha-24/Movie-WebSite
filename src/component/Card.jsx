import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import '../App.css';

function Card1(prpos) {
  console.log(prpos,"<======data")

  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  
  const handleDoubleClick = (item) => {
    setSelectedMovie(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="d-flex flex-wrap gap-3 p-3">
        {prpos.data.map((movies,item) => (
          <Card
            style={{ width: '18rem', cursor: 'pointer' }}
            key={item.imdbID}
            onDoubleClick={() => handleDoubleClick(item)}
          >
            <Card.Img variant="top" src={movies.Poster} />
            <Card.Body>
              <Card.Title>{movies.Title}</Card.Title>
              <Card.Text>
                Year: {movies.Year} <br />
                Type: {movies.Type}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && (
            <>
              <img
                src={selectedMovie.Poster}
                alt={selectedMovie.Title}
                style={{ width: '100%', marginBottom: '10px' }}
              />
              <p><strong>Year:</strong> {selectedMovie.Year}</p>
              <p><strong>Type:</strong> {selectedMovie.Type}</p>
              <p><strong>IMDB ID:</strong> {selectedMovie.imdbID}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Card1;
