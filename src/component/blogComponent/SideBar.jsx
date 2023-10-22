import React from 'react'
import './sidebar.css'
import sidebarImg from '../../img/post.jpg'


import {AiFillFacebook ,AiFillTwitterSquare,  AiFillInstagram} from 'react-icons/ai'
import {FaPinterestSquare}  from 'react-icons/fa'


const SideBar = () => {



  return (
    <div className='sidebar'>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={sidebarImg} className='sidebarImg' alt="/" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed odit provident eos ex, tempora nisi fuga dolor il </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {["life","music", "style", "sport", "tech", "cinema"].map(item=>    <li className="capitalize inline-block mt-4 cursor-pointer w-[50%]" key={item}>{item}</li> )}
        </ul>
      </div>



      <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
        <i className='sidebarIcon'>
        <AiFillFacebook/>
        </i>
        <i className='sidebarIcon'>
        <AiFillTwitterSquare/>
        </i>
        <i className='sidebarIcon'>
        <FaPinterestSquare />
        </i>
        <i className='sidebarIcon'>
        <AiFillInstagram/>
        </i>
       
        </div>
      </div>
    </div>
  )
}

export default SideBar
