import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const HomeCards = () => {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card>
                        <h2 className="text-2xl font-bold">For Talents</h2>
                        <p className="mt-2 mb-4">
                            Browse our jobs and start your career today
                        </p>
                        <Link
                            to="/jobs"
                            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                        >
                            Find Jobs
                        </Link>
                    </Card>
                    <Card bg='bg-teal-100'>
                        <h2 className="text-2xl font-bold">For Creatives</h2>
                        <p className="mt-2 mb-4">
                            List your job to find the perfect creative for the role
                        </p>
                        <Link
                            to="/add-job"
                            className="inline-block bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                        >
                            Create Job
                        </Link>
                    </Card>
                </div>
            </div>
        </section>

    )
}

export default HomeCards
