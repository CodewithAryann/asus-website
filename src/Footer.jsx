import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <div>        
        <ul style={{color:"#b3b3b3"}} className='links'>
            <li>ABOUT ROG</li>
            <li>HOME</li>
        </ul>
        </div>
        <div>
            <ul style={{color:"#b3b3b3"}} className='links'>
                <li> <a href=""><svg style={{fill:"#b3b3b3"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  alt="facebook" role="presentation" focusable="false"><path d="M12 1C5.925 1 1 5.925 1 12c0 5.158 3.552 9.487 8.343 10.676V15.36H7.075V12h2.268V10.55c0-3.744 1.694-5.479 5.37-5.479.697 0 1.9.137 2.391.273v3.047c-.26-.027-.71-.04-1.27-.04-1.804 0-2.501.683-2.501 2.459V12h3.593l-.617 3.361h-2.976v7.558C18.78 22.261 23 17.624 23 11.999 23 5.926 18.075 1 12 1z" fill="#B3B3B3"></path></svg></a></li>
                <li><a href=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="twitter" role="presentation" focusable="false"><path d="M17.751 3.46h3.067l-6.7 7.658L22 21.538h-6.172l-4.833-6.32-5.531 6.32h-3.07l7.167-8.19L2 3.46h6.328l4.37 5.777L17.75 3.46zm-1.076 16.243h1.7L7.404 5.199H5.58l11.094 14.504z" fill="#B3B3B3"></path></svg></a></li>
            </ul>
        </div>
      </div> 
    {/* <div className='line'></div> */}
    <img style={{width: "96%", marginLeft:"3vw"}} src="./line.png" alt="" />
    <div >
      <div style={{display:"flex", alignItems:"center", gap:"1%", marginLeft:"3vw"}}><svg style={{width:"23px", fill:"#b3b3b3"}} xmlns="http://www.w3.org/2000/svg" data-name="圖層 1" viewBox="0 0 32 32" svg-inline="" alt="language change" role="presentation" focusable="false" class="Footer__languageIcon__7s29R"><path d="M16 0a16 16 0 1016 16A16 16 0 0016 0zm14.28 16h-5.85a29.25 29.25 0 00-.65-6.25 18.25 18.25 0 004.08-1.7 14.21 14.21 0 012.42 8zm-21 0a27.59 27.59 0 01.61-5.83 29.15 29.15 0 005.24.61V16H9.29zm13.42 0h-5.84v-5.22a29.15 29.15 0 005.24-.61 27.59 27.59 0 01.61 5.83zm-7.56 14.14c-1.67-.48-3.17-2.32-4.23-5a26.22 26.22 0 014.23-.45zm1.72-5.42a26.22 26.22 0 014.23.45c-1.06 2.65-2.56 4.49-4.23 5zm0-1.72v-5.25h5.79a25.52 25.52 0 01-1 5.76 29.41 29.41 0 00-4.79-.51zm0-13.94v-7.2c2 .57 3.75 3.11 4.81 6.64a27.42 27.42 0 01-4.81.56zm-1.72-7.2v7.2a27.42 27.42 0 01-4.81-.56c1.06-3.5 2.81-6.07 4.81-6.64zm0 15.89V23a29.41 29.41 0 00-4.8.51 25.52 25.52 0 01-1-5.76zm-6.5 6.15a20.36 20.36 0 00-3.53 1.31 14.26 14.26 0 01-3.27-7.46h5.78a27.14 27.14 0 001.02 6.15zm.56 1.64a14.1 14.1 0 002.25 4 14.19 14.19 0 01-5.08-3 19.55 19.55 0 012.83-1zm13.6 0a19.55 19.55 0 012.83 1 14.19 14.19 0 01-5.08 3 14.1 14.1 0 002.25-4zm.56-1.64a27.14 27.14 0 001-6.15h5.78a14.26 14.26 0 01-3.27 7.46 20.36 20.36 0 00-3.51-1.31zM26.8 6.68a17.25 17.25 0 01-3.45 1.4 15.46 15.46 0 00-2.8-5.6 14.3 14.3 0 016.25 4.2zm-15.35-4.2a15.46 15.46 0 00-2.8 5.6 17.25 17.25 0 01-3.45-1.4 14.3 14.3 0 016.25-4.2zM4.14 8.05a18.25 18.25 0 004.08 1.7A29.25 29.25 0 007.57 16H1.72a14.21 14.21 0 012.42-7.95z"></path></svg><p style={{color:"#b3b3b3"}}>Middle East/English</p></div>


    </div>

    </div>
  );
};

export default Footer;
