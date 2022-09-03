import React, { Fragment, useState } from 'react'
import './coursepage.css'
import { data } from '../../../config/data'
import CourseCard from '../../Card/CourseCard'
import { Pagination } from '@material-ui/lab'
const CoursePage = () => {
  const [keyword, setkeyword] = useState('')
  const [coursedata, setcoursedata] = useState(data)
  const [dataFound, setdataFound] = useState(true)
  const [page, setPage] = useState(1)
  let categories=['programming language','Data Structures & Algorithms','Web Devlopement','Mobile App Devlopement','Projects']
  const submitHandler=(e)=>{
    setdataFound(true);
    e.preventDefault();
    let searchedData=[];
    if(keyword.trim()){
      data.forEach((course)=>{
        if(course.Name.toLowerCase().includes(keyword.toLowerCase()) || course.Author.toLowerCase().includes(keyword.toLowerCase())){
          searchedData.push(course);
        }
      })
      setcoursedata(searchedData)
    }else{
      setcoursedata(data)
    }
    if(searchedData.length<1 && keyword.trim()){
      setdataFound(false);
    }
  }
  const handleSelect=(e)=>{
    let category=e.target.value;
    let filteredProduct=[]
    data.forEach((course)=>{
      if(course.category===category){
        filteredProduct.push(course)
      }
    })
    setcoursedata(filteredProduct)
  }
  return (
    <Fragment>
            <div className="Searchbox">
                <form onSubmit={submitHandler}>
                  <input type="text" placeholder='Search Course Name Or Author Name...' value={keyword} onChange={(e)=>setkeyword(e.target.value)} />
                  <button type='Submit' >Search</button>
                </form>
            </div>
            {dataFound && dataFound ?
              <div className="products">
                {
                  coursedata.slice((page-1)*5,(page-1)*5+5).map((val,i)=>(
               <CourseCard data={val} key={i} />
                  ))
                }
            </div>:
            <div className='CoursesNotFound'>
            <h1>No Courses Found</h1></div>
            }
            <div className="CategoryBox">
             <h3>Categories</h3>
             <select onChange={handleSelect}>
             <option defaultChecked value='Choose one'>Choose one</option>
            {
              categories.map((val,i)=>(
                <option key={i} value={val}>{val}</option>
              ))
            }
             </select>
            </div>
            <div className="pagination">
            <Pagination count={coursedata.length>5?Math.ceil(coursedata.length/5):1} color="primary" showFirstButton showLastButton  onChange={(__,val)=>{setPage(val);window.scroll({ top: 100,
                left: 0,
                behavior: 'smooth'})} }  />
            </div>
    </Fragment>
  )
}

export default CoursePage