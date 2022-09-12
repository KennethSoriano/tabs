import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const[jobs, setJobs] = useState([]);
  const[loading, setLoading] = useState(false);
  const[value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const newJobs = response.json
      setJobs(newJobs)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [])

  if(loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    )
  }
  const {company, dates, duties, title} = jobs[value]
  return (
    <section className='section'>
      <div className="title">
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className="jobs-center">
        {}
        {}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return(
              <div key={index} className="job desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                {duty}
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App