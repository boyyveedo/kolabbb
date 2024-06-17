import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobList from '../components/JobList'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
    return (
        <div>
            <Hero Title='Welcome To Dix.Africa' Subtitle='"Discover and apply for jobs tailored to your expertise and career goals."

'/>
            <HomeCards />
            <JobList isHome={true} />
            <ViewAllJobs />

        </div>
    )
}

export default HomePage
