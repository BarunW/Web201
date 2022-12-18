import React from 'react'
import '../CSS/Nav.css'

export default function NavComponent(){
   
    return(
        <header className='nav-header'> 
           
                <img className="meme-face-logo"src={process.env.PUBLIC_URL + '/images/memeface.png'} alt='' />
                <h2 className='nav-title'>Meme Generator</h2>
                <h4 className='w-o-d'>B***h</h4>
            
        </header>
       
    )
}