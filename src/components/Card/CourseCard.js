import React, { Fragment } from 'react'
import './coursecard.css'
import ReactStars from 'react-rating-stars-component'
const CourseCard = ({data}) => {
    const options={
        isHalf:true,
        edit:false,
        value:data.rating,
        size:window.innerWidth>600?24:16,
        activeColor:'tomato'
    }
  return (
    <Fragment>
    <div className='Card'>
    <img src={data.image} alt={data.name} />
    <p>{data.Name}</p>
    <div className='star'>
    <ReactStars {...options} /><span>{`(${data.reviews} reviews)`}</span>
    </div>
        <span>{`Author:${data.Author}`}</span>
        <div>
        <span><s>{`₹${data.actualprice}`}</s></span><span>{`₹${data.price}`}</span>
        </div>
    </div>
    </Fragment>
  )
}

export default CourseCard