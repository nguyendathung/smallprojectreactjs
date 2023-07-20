import React from 'react';
import '../components/Title_footer.css'
 function  Footer(){
    return(
        <>
        <div className='flex-container-footer'>
            <div>
                <h1>Fast Food Store</h1>
            </div>
            <div>
                <h3>About</h3>
            </div>
            <div className='contact'>
                <h1>Contact</h1>
                <nav>
                    <ul>
                        <li><h4>Email:nguyendathung0412@gmail.com</h4></li>
                    </ul>
                    <ul>
                        <li><h4>Sđt:0903074294</h4></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
        
    )
 }

 export default Footer;