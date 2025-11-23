import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams()
    console.log(params.id)

  return (
    <div>
        <h1>You typed: {params.id}</h1>
    </div>
  )
}

export default CourseDetail