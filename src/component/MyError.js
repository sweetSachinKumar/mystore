import React from 'react'

const MyError = () => {
    return (
        <div className="mx-auto  h-[30vh] sm:h-full w-[90vw]  md:w-[80vw] mt-16">
            <div className=" p-2">
                <h2 className="mb-4 sm:mb-12 text-4xl sm:text-7xl font-bold text-neutral-800/95">Opps..</h2>
                <p className="text-xl font-semibold leading-[1.01]  mb-7 tracking-wide sm:text-3xl text-neutral-700">I think Here is some a Error Occured</p>
                <small className="text-xs md:text-base font-semibold text-neutral-700">i apologize for this.</small>
            </div>
        </div>

    )
}

export default MyError
