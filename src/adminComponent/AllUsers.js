import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getallUser, removeUser } from '../slices/AuthSlice'

const AllUsers = () => {
    const [page, setPage] = useState(1)
    const [date,setdate] = useState(3432)

    const userData = useSelector(state => state.auth.allUserData)
    const dispatch = useDispatch()

console.log(userData)

    let allLengthDT = Math.ceil(userData?.dataLength/12)

    let arrNumb = [] ;
    
    for(let i = 1; i<=allLengthDT; i++) {
      arrNumb.push(i)
    }
  
  
  
    const deleteUser = (id) => {
      dispatch(removeUser(id))
      let currentTm = Date.now()
      setdate(currentTm)
    }


    useEffect(  ()=> { 
        dispatch(getallUser())
}, [])


useEffect(() => {
    dispatch(getallUser(page))

  }, [page,date])



  return (
    <>
       <div className='py-12 mb-32 overflow-auto   sm:w-full w-full  h-full' >
   <h3 className="uppercase text-center py-5 text-xl md:text-2xl font-semibold text-neutral-800/90">All Users</h3>
            <table className="w-full text-xs sm:text-sm lg:text-base min-h-[80vh] h-full min-w-[500px]  ">
                <thead>
                  <tr className="grid grid-cols-12  gap-3 bg-orange-600/80 text-white p-1">
                        <th className="col-span-4  text-left ps-3">User Id</th>
                        <th className="col-span-2  text-left">name</th>
                        <th className="col-span-2  text-right">Email</th>
                        <th className="col-span-2  text-right pr-3">admin</th>
                        <th className="col-span-2  text-right pr-3">action</th>
                    </tr>
                </thead>
                <tbody>
                { page ===1 &&  <tr className="grid grid-cols-12 gap-3 even:bg-gray-500/10 odd:bg-transparent p-1">
                        <td className="col-span-4 break-words ps-3">6540fbfa6a895e11I491c6949d</td>
                        <td className="col-span-2 ">Sachin kumar</td>
                        <td className="col-span-2 break-words text-right">sachinstore@gmail.com</td>
                        <td className="col-span-2  text-right pe-3 text-green-800/80">owner</td>
                        <td className="col-span-2  text-right pe-3 text-gray-500/90">no action</td>
                </tr>
}

                    {
                        userData?.userData?.map(user=> {
                            return(
                                <tr className="grid grid-cols-12 gap-3 even:bg-gray-500/10 odd:bg-transparent p-1">
                                <td className="col-span-4  ps-3 break-words">{user._id}</td>
                                <td className="col-span-2 ">{user.name}</td>
                                <td className="col-span-2 break-words text-right">{user.email}</td>
                                <td className="col-span-2  text-right pe-3">user</td>
                                <td className="col-span-2  text-right pe-3 "> <span onClick={()=> deleteUser(user._id)} className='px-1 cursor-pointer text-red-100 bg-red-500/80 rounded-md'>delete</span></td>
                            </tr>

                            )
                        })
                    }
             
                  
                
                  

                </tbody>
            </table>
            <div className='border-4  h-24 w-full mt-4 flex items-center p-4 text-xs sm:text-sm font-semibold   text-right'>
  <span>Page no: </span>
  {
    arrNumb?.map(num => <span onClick={()=> setPage(num)} className={`${page===num ? "text-orange-700": "text-gray-800"} hover:text-orange-500/80 cursor-pointer p-3`} >{num}</span>)
  }
</div>
        </div>
    </>
  )
}

export default AllUsers
