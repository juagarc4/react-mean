import React from 'react'
import { GifGridItem } from 'components/GifGridItem'
import { useFetchGifs } from 'hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="card-grid">
        {gifs && gifs.map((gif) => <GifGridItem key={gif.id} {...gif} />)}
      </div>
    </>
  )
}
