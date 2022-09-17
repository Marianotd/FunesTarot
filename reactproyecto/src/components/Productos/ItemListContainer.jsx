import React from 'react'
import ItemList from './ItemList'

export default function ProductContainer() {
  let tit = "Ilustraciones"

  return (
    <section>
      <button className='sectionTitle my-2 ps-4'>{tit}</button>
      <div className="contProductos d-flex flex-row flex-wrap justify-content-evenly align-content-center p-4">
        <ItemList/>
      </div>
    </section>
  )
}
