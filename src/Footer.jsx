import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <div>        
        <ul className='links'>
            <li>ABOUT ROG</li>
            <li>HOME</li>
        </ul>
        </div>
        <div>
            <ul className='links'>
                <li> <a href=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" alt="facebook" role="presentation" focusable="false"><path d="M12 1C5.925 1 1 5.925 1 12c0 5.158 3.552 9.487 8.343 10.676V15.36H7.075V12h2.268V10.55c0-3.744 1.694-5.479 5.37-5.479.697 0 1.9.137 2.391.273v3.047c-.26-.027-.71-.04-1.27-.04-1.804 0-2.501.683-2.501 2.459V12h3.593l-.617 3.361h-2.976v7.558C18.78 22.261 23 17.624 23 11.999 23 5.926 18.075 1 12 1z" fill="#B3B3B3"></path></svg></a></li>
                <li><a href=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" alt="twitter" role="presentation" focusable="false"><path d="M17.751 3.46h3.067l-6.7 7.658L22 21.538h-6.172l-4.833-6.32-5.531 6.32h-3.07l7.167-8.19L2 3.46h6.328l4.37 5.777L17.75 3.46zm-1.076 16.243h1.7L7.404 5.199H5.58l11.094 14.504z" fill="#B3B3B3"></path></svg></a></li>
            </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
