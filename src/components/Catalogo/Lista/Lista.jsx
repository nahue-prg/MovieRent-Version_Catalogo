import React from 'react'
import Item from '../Item/item'

const Lista = ({movies}) => {
  if (!movies || !movies.length){
    return <p></p>
  }
  return (
    movies.map(({ id, title, overview, release_date, poster_path }) => {
      if(id !== null && id !== undefined) { console.log(id + title);
        return <Item id={id} title={title} overview={overview} estreno={release_date} poster_path={poster_path}/>
      }
    })
  )
}

export default Lista