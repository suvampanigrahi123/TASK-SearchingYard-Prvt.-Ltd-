import React, { Fragment } from 'react'
import {CgMouse} from 'react-icons/cg'
import './home.css'
import {data} from '../../../config/data'
import CourseCard from '../../Card/CourseCard'
import { Link } from 'react-router-dom'
const Home = () => {
  let PopularCourse=[];
  data.forEach((val,i)=>{
    if(i<6){
      PopularCourse.push(val); 
    }
  })
  return (
    <Fragment>
    <div className='banner'>
    
            <p>Welcome to IT Courses</p>
            <h1>FIND SOME AMAZING COURSES BELOW</h1>
            <a href='#container'>
             <button>Scroll <CgMouse/>  </button>
     </a>
    </div>
    <h2 className='heading'>Popular Courses</h2>
    <div className='CourseContainer' id='container'>
    {
      PopularCourse.map((course)=>(
            <CourseCard data={course} />
      ))
    }
    </div>
    <Link className='btnlink' to='/courses'><button >All Courses</button></Link>
    </Fragment>
  )
}

export default Home