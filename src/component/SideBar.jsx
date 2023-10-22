import React  from 'react'
 
const NewHeader = ({allProduct, queryProduct, setMyQuery}) => {
   
  console.log(queryProduct[0]?.category)

  // ${queryProduct && queryProduct[0]?.category === tag ? "bg-neutral-800 hover:bg-neutral-900/80 text-slate-100" : "border border-neutral-800 text-neutral-800 "}

  return (
    <aside className={`h-screen  md:w-[340px] $  bg-blue-200/10 p-2  transition duration-300  hidden lg:block`}>
      <div className=' w-full h-full'>
        
      <nav className="pt-5 border-t-2 border-gray-400/30 "> 
            <div className=" text-orange-800/90 mb-4">
              <span className='text-base font-bold tracking-wide '> Select any Category </span>
              
            </div>
            <ul className="ps-2  h-[80vh] overflow-auto border ">
              
              {
                allProduct.map((navOp, i) => {
                  return <li key={i} onClick={()=> setMyQuery(navOp)}  className={` cursor-pointer rounded-md border  ${queryProduct && queryProduct[0]?.category === navOp ? "bg-neutral-800 hover:bg-neutral-900/80 text-slate-100" : "border border-neutral-800 hover:text-orange-800/90 text-neutral-800 "}  my-4 text-xl  px-3 py-2`} > 
                  {navOp}
                      </li>
                })
              }


           
          
        </ul>
      </nav>

      </div>
    </aside>

  )
}

export default NewHeader
