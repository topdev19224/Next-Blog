import React from 'react'

const Nav = (props) => {
  return <div id='navMenu' className={`${props.className} absolute p-5 bg-white w-full flex justify-center items-center`}>
    <ul className='pb-4 text-[1.3rem]'>
      <li className='pt-3 underline'><a href="">Home</a></li>
      <li className='pt-3 underline'><a href="">Menu</a></li>
      <li className='pt-3 underline'><a href="">Archive</a></li>
      <li className='pt-3 underline'><a href="">Theme</a></li>
    </ul>
  </div>
}

export default Nav