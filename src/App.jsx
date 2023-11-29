import { Route,Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState, useEffect } from 'react';
import Header from './layouts/header/Header'
import Footer from './layouts/footer/footer';
import './App.scss'
import { route } from './routes/route'

function App() {
  const [currentScrollPos, setCurrentScrollPos] = useState(window.scrollY);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isColor, setIsColor] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPos = window.scrollY;
      setPrevScrollPos(currentScrollPos);
      setCurrentScrollPos(newScrollPos);

      console.log('Vị trí hiện tại:', newScrollPos);
      console.log('Vị trí trước đó:', prevScrollPos);
      if(newScrollPos <= prevScrollPos ){
        
        setIsHeaderVisible(true)
      }else{
        setIsHeaderVisible(false)
      }

      if(newScrollPos > 400){
        setIsColor(true)
      }else{
        setIsColor(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentScrollPos, prevScrollPos]);
  return (
  <>
   {isHeaderVisible &&  <Header isColor={isColor} /> }

  <Routes >
    <Route path={route.home.path} index element={route.home.element} />
    <Route path={route.notFound.path} element={route.notFound.element} />
  </Routes>
  <Footer />
  </>
  )
}

export default App
