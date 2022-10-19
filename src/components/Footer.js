import React from 'react';

const Footer = () => {
   return (
      <div className='footer component'>
         <div className='content-text'>Designed and Developed by</div>
         <div className='developer-name'>S.Sesha Ganesh</div>
         <hr />
         <div className='personal-details'>
            <div className='contact-info'>
               <p className='title-text'>Contact :</p>
               <p className='content-text'>Phone : +91-6374315747</p>
               <p className='content-text'>e-mail : seshaganeshs@gmail.com</p>
            </div>
            <div>
               <p className='title-text'>Follow Me:</p>
               <a href='https://www.linkedin.com/in/sesha-ganesh-418433239/'>
                  <p className='social-icon'>in</p>
               </a>
               <a href='https://www.facebook.com/profile.php?id=100082607388357'>
                  <p className='social-icon'>f</p>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Footer;
