/**
 * @author      Mykola
 * @published   April 20, 2024
 * @description Home page for Next website
 */

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import NavMenu from '@components/elements/navMenu'
import DisplayMedia from '@components/elements/displayMedia'
import Mask from '@components/layout/mask'
import Article from '@components/article'
import { posts } from '../utlis/posts'

const Home = () => {
  const [navStatus, setNavStatus] = useState(null)
  const [src, setSrc] = useState('')
  const [alt, setAlt] = useState('')
  const [imageVisible, setImageVisible] = useState(false)

  const visibleImage = (src, alt) => {
    setSrc(src)
    setAlt(alt)
    setImageVisible(!imageVisible)
  }

  return <>
    <Head>
      <title>BLOG | HOME</title>
    </Head>
    <DisplayMedia src={src} alt={alt} func={visibleImage} visiblity={imageVisible} />
    <div className='main-container w-full h-screen overflow-auto'>
      {/* <div className='before-left h-screen w-[100%] min-[740px]:w-[50%]'></div> */}
      <div className='container-wrapper h-auto'>
        <div id='left' className='w-[50%] max-[740px]:w-full h-screen min-[740px]:fixed relative'>
          <div className='w-full h-full absolute'>
            <NavMenu className={`${navStatus ? 'toCloseMenu' : navStatus === false ? 'toOpenMenu' : 'originalMenu'}`} />
            <div className='logo w-full h-full flex justify-center items-center'>
              <a href="/" className='bg-white p-1'>
                <img src="assets/images/logo.jpg" alt="logo" width={150} />
              </a>
            </div>
            <div className="navigation right-2" onClick={() => setNavStatus(navStatus || navStatus === null ? false : true)}>
              <a className={navStatus ? `navigation-burger open-nav` : navStatus === false ? 'navigation-burger close-nav' : 'navigation-burger'}>
                <span className="nav-icon mt-[21px] h-[1.5px] w-[24px] absolute bg-[#6df7b4]"></span>
              </a>
            </div>
          </div>
        </div>
        <div id='right' className='w-[100%] relative min-[740px]:w-[50%] float-right h-full right-0 overflow-auto max-[740px]:overflow-hidden'>
          <div className='right-container w-full min-[350px]:pt-2 px-5 max-[350px]:px-1 h-full'>
            {/* <div className='header fixed top-0 right-0 min-[200px]:pt-1 max-[200px]:w-full'>
            <div className='left-btn min-[200px]:float-left'>
              <button className='w-full text-white bg-gray-600 opacity-60 font-normal px-5 py-1'>Log In</button>
            </div>
            <div className='right-btn min-[200px]:ml-3 min-[200px]:float-left'>
              <button className='w-full text-white bg-black font-bold  px-5 py-1'>tumblr</button>
            </div>
          </div> */}
            <div id='posts' className='w-full py-2 px-1 h-full'>
              <div className='wrapper mx-[2.5%] min-[740px]:hidden w-[95%] h-full'>
                {
                  posts && posts.length && posts
                    .map((item, key) =>
                      <Article
                        key={key}
                        type={item.type}
                        src={item.src}
                        alt={item.alt ? item.alt : ''}
                        title={item.title ? item.title : ''}
                        link={item.link ? item.link : ''}
                        views={item.views ? item.views : ''}
                        func={item.type === 'image' ? visibleImage : null}
                      />
                    )
                }
              </div>
              <div className='wrapper max-[740px]:hidden w-full h-full'>
                <div className='w-[45%] h-full mx-[2.5%] float-left'>
                  {
                    posts && posts.length && posts
                      .map((item, key) =>
                        key % 2 !== 0 ?
                          <Article
                            key={key}
                            type={item.type}
                            src={item.src}
                            alt={item.alt ? item.alt : ''}
                            title={item.title ? item.title : ''}
                            link={item.link ? item.link : ''}
                            views={item.views ? item.views : ''}
                            func={item.type === 'image' ? visibleImage : null}
                          /> : <></>
                      )
                  }
                </div>
                <div className='w-[45%] h-full mx-[2.5%] float-left'>
                  {
                    posts && posts.length && posts
                      .map((item, key) =>
                        key % 2 === 0 ?
                          <Article
                            key={key}
                            type={item.type}
                            src={item.src}
                            alt={item.alt ? item.alt : ''}
                            title={item.title ? item.title : ''}
                            link={item.link ? item.link : ''}
                            views={item.views ? item.views : ''}
                            func={item.type === 'image' ? visibleImage : null}
                          /> : <></>
                      )
                  }
                </div>
                <div className=' clear-both'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  </>
}

export default Home