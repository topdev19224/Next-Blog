import React, { useState, useEffect } from 'react'

export default function (props) {
  return <>
    <div id='media-modal' className={`fixed inset-0 bg-black bg-opacity-70 overflow-auto backdrop-blur z-10 w-full h-full ${props.visiblity ? 'block' : 'hidden'}`}>
      <div className='w-full p-10 h-screen z-10 flex justify-center items-center'>
        <img src={props.src} alt={props.alt} className='z-[11] h-[90%]' />
        <div className='w-full h-full absolute z-10 flex justify-center items-center' onClick={() => props.func('', '')}></div>
      </div>
    </div>
  </>
}
// export default function Modal(props) {
//   return (
//     <>
//       <dialog
//         className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-70 z-50 overflow-auto backdrop-blur flex justify-center items-center">
//         <div className="bg-white m-auto p-8">
//           <div className="flex flex-col items-center">
//             <h3>Modal content</h3>
//             <br />
//             <button type="button" onClick={() => props.func(props.src, props.alt)} className="bg-red-500 text-white p-2 ">Close Modal</button>
//           </div>

//         </div>
//       </dialog>
//     </>
//   );
// }