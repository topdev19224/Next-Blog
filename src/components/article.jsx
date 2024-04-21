import React from 'react'

export default function (props) {
  return <article className='w-[100%] bg-white mb-5 p-6'>
    <div className='inner'>
      <div className='content'>
        <p className='mb-4'>
          <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
        </p>
        <blockquote>
          <div className='npf-row'>
            <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
              <img className='cursor-pointer' src="assets/images/8.jpg" alt="" onClick={() => displayMedia('assets/images/8.jpg', '')} />
            </div>
            <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
              <img className='cursor-pointer' src="assets/images/12.jpg" alt="" onClick={() => displayMedia('assets/images/12.jpg', '')} />
            </div>
            <div className='clear-both'></div>
          </div>
          <div className='npf-row'>
            <div className='npf-col w-full h-full flex justify-center items-center'>
              <img className='cursor-pointer' src="assets/images/11.jpg" alt="" onClick={() => displayMedia('assets/images/11.jpg', '')} />
            </div>
          </div>
        </blockquote>
        <p className='mt-3 text-gray-400'>pictures</p>
      </div>
      <footer className='post-footer w-full'>
        <ul className='tags mt-4'>
          <li>
            <a href="">#me</a>
          </li>
        </ul>
        <div className='flex flex-row justify-between flex-wrap mt-3'>
          <ul className='post-meta'>
            <li>
              <a className='notecount open-post'>11 notes</a>
            </li>
          </ul>
          <ul className='share animated'>
            <li className='shate-toggle float-left ml-[3px]'>
              <a href=""><i className='fa fa-ellipsis-h'></i></a>
            </li>
            <li className='post-like float-left ml-[9px]'>
              <a href="" className='text-[1.1rem]'><i className='fa fa-heart'></i></a>
            </li>
            <li className='post-reblog float-left pt-1 ml-[9px]'>
              <a href="">
                <svg className='w-[18px]' viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000">
                  <path d="M5.01092527,5.99908429 L16.0088498,5.99908429 L16.136,9.508 L20.836,4.752 L16.136,0.083 L16.1360004,3.01110845 L2.09985349,3.01110845 C1.50585349,3.01110845 0.979248041,3.44726568 0.979248041,4.45007306 L0.979248041,10.9999998 L3.98376463,8.30993634 L3.98376463,6.89801007 C3.98376463,6.20867902 4.71892527,5.99908429 5.01092527,5.99908429 Z">
                  </path>
                  <path d="M17.1420002,13.2800293 C17.1420002,13.5720293 17.022957,14.0490723 16.730957,14.0490723 L4.92919922,14.0490723 L4.92919922,11 L0.5,15.806 L4.92919922,20.5103758 L5.00469971,16.9990234 L18.9700928,16.9990234 C19.5640928,16.9990234 19.9453125,16.4010001 19.9453125,15.8060001 L19.9453125,9.5324707 L17.142,12.203">
                  </path>
                </svg>
              </a>
            </li>
            <li className='clear-both'></li>
          </ul>
        </div>
      </footer>
    </div>
  </article>
}