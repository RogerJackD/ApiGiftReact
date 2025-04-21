import React from 'react';
import { useFetchGifs } from '../hooks/useFetchgifs';
import { GifItem } from './GifItem';
export const GifGrid = ({category}) => {

  const {gifsData, isloading} =  useFetchGifs(category)



  return (
    <>

    {
        isloading && <h3>"cargando"</h3>
    }

    <h2> {category} </h2>

    <div className='card-grid'>

    {
        
        gifsData.map((gifdata)=>
            <GifItem key={gifdata.id} {...gifdata} />
        )
    }
    </div>
    </>
  )
}
