import React from 'react'

const Hero = (props) => {
    return (
        <section className="bg-teal-700 py-20 mb-4">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div className="text-center">
                    <h1
                        className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                    >
                        {props.Title}
                    </h1>
                    <hr className="my-6 border-0 h-1 w-3/6 bg-gray-300 rounded mx-auto" />


                    <p className="my-4 text-xl text-white">
                        {props.Subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
