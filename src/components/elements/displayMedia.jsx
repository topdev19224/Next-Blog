import React from 'react'

export default function (props) {
  return <>
    <div id='media-modal' className='w-full p-10 h-full absolute z-10 flex justify-center items-center'>
      <img src={props.src} alt={props.alt} className='z-[11] h-[90%]' />
      <div className='w-full h-full absolute z-10 flex justify-center items-center' onClick={() => props.func('', '')}></div>
    </div>
  </>
}