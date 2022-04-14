import React from 'react'
import './Pagination.css'
const Pagination = ({totalPages, handlePage}) => {
    const buttonArray= new Array(totalPages).fill(0).map((_, index)=>index+1)
  return (
    <div>
        {
            buttonArray.map(num=>{
                return <button className='click' onClick={()=>handlePage(num)}>{num}</button>
            })
        }
    </div>
  )
}

export default Pagination