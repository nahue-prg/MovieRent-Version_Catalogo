import React from 'react'
import Item from '../Item/item'

const Lista = ({ movies }) => {
  if (!movies || !movies.length) {
    return <p>No hay películas disponibles</p>;
  }

  // Divide the movies array into sub-arrays of 4 elements
  const movieRows = movies.reduce((rows, movie, index) => {
    /*Como queremos que colapse, calculamos el Mínimo común múltiplo de las cantidades de columnas por fila que necesitamos 
    (Filas de 3, 4 y 2 columnas -> mcm 12) */
    const rowIndex = Math.floor(index / 12);
    if (!rows[rowIndex]) {
      rows[rowIndex] = [];
    }
    rows[rowIndex].push(movie);
    return rows;
  }, []);

  return (
    <> 
      {movieRows.map((row, index) => (
        <div className="row"  key={index}>
          {row.map(({ id, title, overview, release_date, poster_path }) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3   d-flex justify-content-center" key={id} style={{marginTop:'30px'}}>
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