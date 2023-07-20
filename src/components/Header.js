import React from 'react';

import '../components/Title_header.css'
 function  Header(){
    return(
        
        <>
        <div className='flex-container'>
            <div>
                <h1>Home</h1>
            </div>
            <div className='search'>
                <input type='text' placeholder='search...'></input>
                {/* Loading */}
            </div>
            <div className='contact'>
                <h4>Email:nguyendathung0412@gmail.com</h4>
                <h4>Sđt:0903074294</h4>
            </div>
        </div>
        </>
        
    )
 }

 export default Header;