import React, { useState } from 'react'
import { AddCategory } from 'components/AddCategory'
import { GifGrid } from 'components/GifGrid'
export default function GifExpertApp({ defaultCategories = [] }) {
  const [categories, setCategories] = useState(defaultCategories)
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}
