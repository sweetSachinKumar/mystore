import React from 'react'
import AdminDs from './AdminDs'

const AdminHome = () => {
    return (
        <>
            <div className='py-24 border-2 lg:px-24 px-2 min-h-[70vh] h-full container mx-auto flex flex-col items-center w-full justify-center gap-40 '>

                {/* box */}
                <div className='p-12 shadow space-y-5  max-w-lg w-full min-w-full'>
                    <div >
                        <span className='text-sm sm:text-base md:text-xl'>Admin Name: </span> <span className='text-sm sm:text-base md:text-xl'>sachin Kumar</span>
                    </div>
                    <div>
                        <span className='text-sm sm:text-base md:text-xl'>Email: </span> <span className='text-sm sm:text-base md:text-xl'>sachinstore@gmail.com</span>
                    </div>
                    <div>
                        {/* <span>Member since : </span> <span> {months[new Date(userData?.date).getMonth()]}, {new Date(userData?.date).getFullYear()}  </span> */}
                    </div>

                </div>


                <AdminDs />
            </div>
        </>
    )
}

export default AdminHome
