import React from 'react'
import Item from '../Item/item'

const Lista = ({ movies }) => {
  if (!movies || !movies.length) {
    return <p>No hay películas disponibles</p>;
  }

  // Divide the movies array into sub-arrays of 4 elements
  const movieRows = movies.reduce((rows, movie, index) => {
    const rowIndex = Math.floor(index / 4);
    if (!rows[rowIndex]) {
      rows[rowIndex] = [];
    }
    rows[rowIndex].push(movie);
    return rows;
  }, []);

  return (
    <> 
      {movieRows.map((row, index) => (
        <div className="row" style={{marginTop:'30px'}} key={index}>
          {row.map(({ id, title, overview, release_date, poster_path }) => (
            <div className="col-12 col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center" key={id}>
              <Item
                id={id}
                title={title}
                overview={overview}
                estreno={release_date}
                poster_path={poster_path}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Lista;