import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
  
  return (
    <section>
      <ul className='tour-grid'>
        {
            tours.map(tour => {

return  (
            <li className='tour-container' key={tour.id}>
            <Tour tour={tour} removeTour={removeTour} />

            </li>)
})
        }
      </ul>
      </section>
  )
}

export default Tours
