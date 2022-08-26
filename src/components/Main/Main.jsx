import React from 'react'
import './Main.css'
import { useEffect } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
// import Waterfall from '../../img/waterfall.mp4'

const Main = () => {

useEffect(() => {
    document.querySelector('video').playbackRate = .3;    
})
    
    
 return (
    <div className="VideoContainer">
    <video autoPlay loop muted>
        <source
         src="https://advdevm0.blob.core.windows.net/newcontainer/waterfall.mp4"
          type="video/mp4"
        />
         </video>
         <div className="Title">
             Understanding our most precious resource for a better world
         </div>
        <div className="Search">
                <input className="SearchBar" type="text" placeholder="Search our site"/>
                <div className="s-icon">
                <UilSearch/>
                </div>      
        </div>
    </div>
  )
}

export default Main