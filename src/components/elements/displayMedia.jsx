import React from 'react'

export default function (props) {
  return <>
    <div className='fixed inset-0 z-10'>
      <div id='media-modal' className='w-full p-10 h-screen z-10 flex justify-center items-center'>
        <img src={props.src} alt={props.alt} className='z-[11] h-[90%]' />
        <div className='w-full h-full absolute z-10 flex justify-center items-center' onClick={() => props.func('', '')}></div>
      </div>
    </div>
  </>
}