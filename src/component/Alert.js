import React, { useEffect, useRef, useState } from 'react'
import './alert.css'
const Alert = () => {
    const alt = useRef()
    const [show, setShow] = useState(false)


    useEffect(()=>{
        show? alt.current.classList.add("showAlertNow") : alt.current.classList.remove("showAlertNow") 
    },[show])
    console.log(alt.current)
  return (
    // pointer-events-none
    <div  ref={alt}  className={`z-50 hidden absolute top-24 right-16 transition-all duration-1000  ease-in-out`}>
<button onClick={()=> setShow(!show) }>button</button>
        {/* box */}
        <div  className={`border bg-blue-500 py-3 ps-8 pe-16 md:text-2xl text-xl font-semibold  text-slate-300 rounded transition duration-300 ease-in-out`}>
      this is alert 

        </div>
    </div>
  )
}

export default Alert
