/**
 * @author      Mykola
 * @published   April 20, 2024
 * @description Home page for Next website
 */

import React, { useState } from 'react'
import Head from 'next/head'
import NavMenu from '@components/elements/navMenu'
import DisplayMedia from '@components/elements/displayMedia'
import Mask from '@components/layout/mask'

const Home = () => {
  const [navStatus, setNavStatus] = useState(null)
  const [src, setSrc] = useState('')
  const [alt, setAlt] = useState('')

  const displayMedia = (src, alt) => {
    setSrc(src)
    setAlt(alt)
  }

  return <>
    <Head>
      <title>BLOG | HOME</title>
    </Head>
    {
      src ? <>
        <Mask />
        <DisplayMedia src={src} alt={alt} func={displayMedia} />
      </> : <></>
    }
    <div className='main-container w-full h-auto'>
      <div className='before-left h-screen w-[100%] min-[740px]:w-[50%]'></div>
      <div id='left' className='w-[0%] h-screen min-[740px]:fixed relative'>
        <div className='w-full h-full absolute'>
          <NavMenu className={`max-[740px]:hidden ${navStatus ? 'toCloseMenu' : navStatus === false ? 'toOpenMenu' : 'originalMenu'}`} />
          <div className='logo w-full h-full flex justify-center items-center'>
            <a href="/" className='bg-white p-1'>
              <img src="assets/images/logo.jpg" alt="logo" width={150} />
            </a>
          </div>
          <div className="navigation hidden min-[740px]:block right-2" onClick={() => setNavStatus(navStatus || navStatus === null ? false : true)}>
            <a className={navStatus ? `navigation-burger open-nav` : navStatus === false ? 'navigation-burger close-nav' : 'navigation-burger'}>
              <span className="nav-icon mt-[21px] h-[1.5px] w-[24px] absolute bg-[#6df7b4]"></span>
            </a>
          </div>
        </div>
      </div>
      <div id='right' className='w-[100%] relative min-[740px]:w-[50%] min-[740px]:absolute h-full right-0 overflow-auto max-[740px]:overflow-hidden'>
        <div className='right-container w-full min-[350px]:pt-2 px-5 max-[350px]:px-1 h-full'>
          <div className='header fixed top-0 right-0 min-[200px]:pt-1 max-[200px]:w-full'>
            <div className='left-btn min-[200px]:float-left'>
              <button className='w-full text-white bg-gray-600 opacity-60 font-normal px-5 py-1'>Log In</button>
            </div>
            <div className='right-btn min-[200px]:ml-3 min-[200px]:float-left'>
              <button className='w-full text-white bg-black font-bold  px-5 py-1'>tumblr</button>
            </div>
          </div>
          <div id='posts' className='w-full py-2 px-1 h-full'>
            <div className='wrapper mx-[5%] min-[740px]:hidden w-full h-full'>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/5.jpg" alt=""  onClick={() => displayMedia('assets/images/5.jpg', '')} />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/2.jpg" alt="" onClick={() => displayMedia('assets/images/2.jpg', '')} />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <video controls>
                            <source src="assets/videos/1.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <footer className='post-footer w-full'>
                    <div className='flex flex-row justify-between flex-wrap mt-4'>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <audio controls>
                            <source src="assets/audios/3.mp3" type="audio/mpeg" />
                          </audio>
                        </div>
                      </div>
                      <div className='npf-row mt-2'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/11.jpg" alt="" onClick={() => displayMedia('assets/images/11.jpg', '')} />
                        </div>
                      </div>
                    </blockquote>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <video controls>
                            <source src="assets/videos/2.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </blockquote>
                    <p className='mt-3 text-gray-400'>video</p>
                  </div>
                  <footer className='post-footer w-full'>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <p className='mb-4'>
                      <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                    </p>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/12.jpg" alt="" />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/7.jpg" alt="" />
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <p className='mb-4'>
                      <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                    </p>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/8.jpg" alt="" />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/12.jpg" alt="" />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/11.jpg" alt="" />
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <p className='mb-4'>
                      <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                    </p>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/8.jpg" alt="" />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/12.jpg" alt="" />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/11.jpg" alt="" />
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <p className='mb-4'>
                      <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                    </p>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/8.jpg" alt="" />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/12.jpg" alt="" />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/11.jpg" alt="" />
                        </div>
                      </div>
                    </blockquote>
                    <p className='mt-3 text-gray-400'>pictures</p>
                  </div>
                  <footer className='post-footer w-full'>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/5.jpg" alt="" />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/2.jpg" alt="" />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <video controls>
                            <source src="assets/videos/1.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <footer className='post-footer w-full'>
                    <div className='flex flex-row justify-between flex-wrap mt-4'>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <audio controls>
                            <source src="assets/audios/3.mp3" type="audio/mpeg" />
                          </audio>
                        </div>
                      </div>
                      <div className='npf-row mt-2'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/11.jpg" alt="" />
                        </div>
                      </div>
                    </blockquote>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <video controls>
                            <source src="assets/videos/2.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </blockquote>
                    <p className='mt-3 text-gray-400'>video</p>
                  </div>
                  <footer className='post-footer w-full'>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <p className='mb-4'>
                      <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                    </p>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/12.jpg" alt="" />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/7.jpg" alt="" />
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <p className='mb-4'>
                      <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                    </p>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/8.jpg" alt="" />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/12.jpg" alt="" />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/11.jpg" alt="" />
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <p className='mb-4'>
                      <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                    </p>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/8.jpg" alt="" />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/12.jpg" alt="" />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/11.jpg" alt="" />
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
              <article className='w-[90%] max-[350px]:p-3 bg-white mb-5 p-6'>
                <div className='inner'>
                  <div className='content'>
                    <p className='mb-4'>
                      <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                    </p>
                    <blockquote>
                      <div className='npf-row'>
                        <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                          <img src="assets/images/8.jpg" alt="" />
                        </div>
                        <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                          <img src="assets/images/12.jpg" alt="" />
                        </div>
                      </div>
                      <div className='npf-row'>
                        <div className='npf-col w-full h-full flex justify-center items-center'>
                          <img src="assets/images/11.jpg" alt="" />
                        </div>
                      </div>
                    </blockquote>
                    <p className='mt-3 text-gray-400'>pictures</p>
                  </div>
                  <footer className='post-footer w-full'>
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
                      </ul>
                    </div>
                  </footer>
                </div>
              </article>
            </div>
            <div className='wrapper max-[740px]:hidden w-full h-full'>
              <div className='w-[45%] h-full bg-white mx-[2.5%] float-left'>
                <article className='w-[100%] bg-white mb-5 p-6'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/5.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <video controls>
                              <source src="assets/videos/1.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <footer className='post-footer w-full'>
                      <div className='flex flex-row justify-between flex-wrap mt-4'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <audio controls>
                              <source src="assets/audios/1.mp3" type="audio/mpeg" />
                            </audio>
                          </div>
                        </div>
                        <div className='npf-row mt-2'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
                          </div>
                        </div>
                      </blockquote>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <video controls>
                              <source src="assets/videos/2.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </blockquote>
                      <p className='mt-3 text-gray-400'>video</p>
                    </div>
                    <footer className='post-footer w-full'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/1.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/7.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
                          </div>
                        </div>
                      </blockquote>
                      <p className='mt-3 text-gray-400'>pictures</p>
                    </div>
                    <footer className='post-footer w-full'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/5.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <video controls>
                              <source src="assets/videos/1.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <footer className='post-footer w-full'>
                      <div className='flex flex-row justify-between flex-wrap mt-4'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <audio controls>
                              <source src="assets/audios/1.mp3" type="audio/mpeg" />
                            </audio>
                          </div>
                        </div>
                        <div className='npf-row mt-2'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
                          </div>
                        </div>
                      </blockquote>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <video controls>
                              <source src="assets/videos/2.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </blockquote>
                      <p className='mt-3 text-gray-400'>video</p>
                    </div>
                    <footer className='post-footer w-full'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/1.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/7.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
                          </div>
                        </div>
                      </blockquote>
                      <p className='mt-3 text-gray-400'>pictures</p>
                    </div>
                    <footer className='post-footer w-full'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
              <div className='w-[45%] h-full bg-white mx-[2.5%] float-left'>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/5.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <video controls>
                              <source src="assets/videos/1.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <footer className='post-footer w-full'>
                      <div className='flex flex-row justify-between flex-wrap mt-4'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <audio controls>
                              <source src="assets/audios/2.mp3" type="audio/mpeg" />
                            </audio>
                          </div>
                        </div>
                        <div className='npf-row mt-2'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
                          </div>
                        </div>
                      </blockquote>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <video controls>
                              <source src="assets/videos/2.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </blockquote>
                      <p className='mt-3 text-gray-400'>video</p>
                    </div>
                    <footer className='post-footer w-full'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/1.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/7.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
                          </div>
                        </div>
                      </blockquote>
                      <p className='mt-3 text-gray-400'>pictures</p>
                    </div>
                    <footer className='post-footer w-full'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/5.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <video controls>
                              <source src="assets/videos/1.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <footer className='post-footer w-full'>
                      <div className='flex flex-row justify-between flex-wrap mt-4'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <audio controls>
                              <source src="assets/audios/1.mp3" type="audio/mpeg" />
                            </audio>
                          </div>
                        </div>
                        <div className='npf-row mt-2'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
                          </div>
                        </div>
                      </blockquote>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <video controls>
                              <source src="assets/videos/2.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </blockquote>
                      <p className='mt-3 text-gray-400'>video</p>
                    </div>
                    <footer className='post-footer w-full'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/1.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/7.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
                <article className='w-[100%] bg-white mb-5 p-6'>
                  <div className='inner'>
                    <div className='content'>
                      <p className='mb-4'>
                        <a href="" className='underline text-black hover:opacity-[1] opacity-[0.35]'>main:</a>
                      </p>
                      <blockquote>
                        <div className='npf-row'>
                          <div className='npf-col w-[50%] h-full float-left pr-[0.2rem] flex justify-center mb-1 items-center'>
                            <img src="assets/images/8.jpg" alt="" />
                          </div>
                          <div className='npf-col w-[50%] h-full float-left flex justify-center mb-1 items-center'>
                            <img src="assets/images/12.jpg" alt="" />
                          </div>
                        </div>
                        <div className='npf-row'>
                          <div className='npf-col w-full h-full flex justify-center items-center'>
                            <img src="assets/images/11.jpg" alt="" />
                          </div>
                        </div>
                      </blockquote>
                      <p className='mt-3 text-gray-400'>pictures</p>
                    </div>
                    <footer className='post-footer w-full'>
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
                        </ul>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  </>
}

export default Home