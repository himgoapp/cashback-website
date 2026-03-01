import React from 'react';
import styles from './newFooter.module.css';
import RakeBackLogoWhite from "../../../assets/Logos_and_illustration/RakeBackLogoWhite.svg"
const NewFooter = () => {
  return (
    <>
      <footer className='container-fluid customFooter'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <div className="brandSection">
                <div className="brandLogo">
                  <img src={RakeBackLogoWhite} width={197} height={57} />

                </div>
                <p className="brandTagline">Make Shopping More Profitable</p>

                <div className="socialIcons">
                  <a href="#" className="socialLink">
                    {X}
                  </a>
                  <a href="#" className="socialLink">
                    {facebook}
                  </a>
                  <a href="#" className="socialLink">
                    {instagram}
                  </a>
                  <a href="#" className="socialLink">
                    {discord}
                  </a>
                  <a href="#" className="socialLink">
                    {telegram}
                  </a>
                  <a href="#" className="socialLink">
                    {linkedin}
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6  col-sm-12'>
              <div className='row'>
                <div className='col-lg-6 col-lg-6 col-md-6 col-sm-12  footerLinksContainer'>
                  <div className="footerSection">
                    <h3 className="sectionTitle">About us</h3>
                    <ul className="sectionLinks">
                      <li><a href="/dictionary" className="footerLink">Dictionary</a></li>
                      <li><a href="/contact-us" className="footerLink">Contact Us</a></li>
                      <li><a href="/retag" className="footerLink">Retag</a></li>
                      <li><a href="#" className="footerLink">Testimonials</a></li>
                      <li><a href="#" className="footerLink">Privacy policy</a></li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-6 col-lg-6 col-md-6 col-sm-12 footerLinksContainer'>
                  <div className="footerSection">
                    <h3 className="sectionTitle">Services</h3>
                    <ul className="sectionLinks">
                      <li><a href="#" className="footerLink">Web design</a></li>
                      <li><a href="#" className="footerLink">Web development</a></li>
                      <li><a href="#" className="footerLink">Mobile design</a></li>
                      <li><a href="#" className="footerLink">UI/UX design</a></li>
                      <li><a href="#" className="footerLink">Branding design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4  col-md-6 col-sm-12'>
              <div className='row'>
                <div className='col-lg-6 col-lg-6 col-md-6 col-sm-12 footerLinksContainer'>
                  <div className="footerSection">
                    <h3 className="sectionTitle">Portfolio</h3>
                    <ul className="sectionLinks">
                      <li><a href="#" className="footerLink">Corporate websites</a></li>
                      <li><a href="#" className="footerLink">E-commerce</a></li>
                      <li><a href="#" className="footerLink">Mobile apps</a></li>
                      <li><a href="#" className="footerLink">Landing pages</a></li>
                      <li><a href="#" className="footerLink">UI/UX projects</a></li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-6 col-lg-6 col-md-6 col-sm-12  footerLinksContainer'>
                  <div className="footerSection">
                    <h3 className="sectionTitle">Contact us</h3>
                    <ul className="sectionLinks">
                      <li><a href="#" className="footerLink">Information</a></li>
                      <li><a href="#" className="footerLink">Request a quote</a></li>
                      <li><a href="#" className="footerLink">Consultation</a></li>
                      <li><a href="#" className="footerLink">Help center</a></li>
                      <li><a href="/terms-and-conditions" className="footerLink">Terms and conditions</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 copyrightText'>
              <p>Copyright © 2025 cashback | All Rights Reserved | <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
            </div>
            <div className='col-lg-12 copyrightText copyrightTexMobile'>
              <p>Copyright © 2025 cashback <br /><br /> | All Rights Reserved | <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </footer>

      {/* <footer className={styles.customFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.brandSection}>
          <div className={styles.brandLogo}>
            <img src={RakeBackLogoWhite} width={196} height={46} />

          </div>
          <p className={styles.brandTagline}>Make Shopping More Profitable</p>

          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink}>
              {X}
            </a>
            <a href="#" className={styles.socialLink}>
              {facebook}
            </a>
            <a href="#" className={styles.socialLink}>
            {instagram}
            </a>
            <a href="#" className={styles.socialLink}>
              {discord}
            </a>
            <a href="#" className={styles.socialLink} >
              {telegram}
            </a>
                <a href="#" className={styles.socialLink} >
              {linkedin}
            </a>
          </div>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.footerLinksContainer}>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>About us</h3>
            <ul className={styles.sectionLinks}>
              <li><a href="#" className={styles.footerLink}>Mission</a></li>
              <li><a href="#" className={styles.footerLink}>Our team</a></li>
              <li><a href="#" className={styles.footerLink}>Awards</a></li>
              <li><a href="#" className={styles.footerLink}>Testimonials</a></li>
              <li><a href="#" className={styles.footerLink}>Privacy policy</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Services</h3>
            <ul className={styles.sectionLinks}>
              <li><a href="#" className={styles.footerLink}>Web design</a></li>
              <li><a href="#" className={styles.footerLink}>Web development</a></li>
              <li><a href="#" className={styles.footerLink}>Mobile design</a></li>
              <li><a href="#" className={styles.footerLink}>UI/UX design</a></li>
              <li><a href="#" className={styles.footerLink}>Branding design</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Portfolio</h3>
            <ul className={styles.sectionLinks}>
              <li><a href="#" className={styles.footerLink}>Corporate websites</a></li>
              <li><a href="#" className={styles.footerLink}>E-commerce</a></li>
              <li><a href="#" className={styles.footerLink}>Mobile apps</a></li>
              <li><a href="#" className={styles.footerLink}>Landing pages</a></li>
              <li><a href="#" className={styles.footerLink}>UI/UX projects</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Contact us</h3>
            <ul className={styles.sectionLinks}>
              <li><a href="#" className={styles.footerLink}>Information</a></li>
              <li><a href="#" className={styles.footerLink}>Request a quote</a></li>
              <li><a href="#" className={styles.footerLink}>Consultation</a></li>
              <li><a href="#" className={styles.footerLink}>Help center</a></li>
              <li><a href="/terms-and-conditions" className={styles.footerLink}>Terms and conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyrightText}>
          <p>Copyright © 2025 cashback</p>
          <p>
            All Rights Reserved |
            <span className={styles.underline}> Terms and Conditions</span> |
            <span className={styles.underline}> Privacy Policy</span>
          </p>

        </div>
      </div>
    </footer> */}
    </>
  );
};

export default NewFooter;


const telegram = <svg width="21" height="21" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_3352_57478)">
    <path d="M10.5 2.22627C13.3055 2.22627 13.6377 2.23857 14.741 2.28779C15.7664 2.33291 16.3201 2.50518 16.6893 2.64873C17.1773 2.8374 17.5301 3.06709 17.8951 3.43213C18.2643 3.80127 18.4898 4.1499 18.6785 4.63799C18.8221 5.00713 18.9943 5.56494 19.0395 6.58623C19.0887 7.69365 19.101 8.02588 19.101 10.8272C19.101 13.6327 19.0887 13.9649 19.0395 15.0683C18.9943 16.0937 18.8221 16.6474 18.6785 17.0165C18.4898 17.5046 18.2602 17.8573 17.8951 18.2224C17.526 18.5915 17.1773 18.8171 16.6893 19.0058C16.3201 19.1493 15.7623 19.3216 14.741 19.3667C13.6336 19.4159 13.3014 19.4282 10.5 19.4282C7.69453 19.4282 7.36231 19.4159 6.25899 19.3667C5.23359 19.3216 4.67988 19.1493 4.31074 19.0058C3.82266 18.8171 3.46992 18.5874 3.10488 18.2224C2.73574 17.8532 2.51016 17.5046 2.32148 17.0165C2.17793 16.6474 2.00566 16.0896 1.96055 15.0683C1.91133 13.9608 1.89902 13.6286 1.89902 10.8272C1.89902 8.02178 1.91133 7.68955 1.96055 6.58623C2.00566 5.56084 2.17793 5.00713 2.32148 4.63799C2.51016 4.1499 2.73984 3.79717 3.10488 3.43213C3.47402 3.06299 3.82266 2.8374 4.31074 2.64873C4.67988 2.50518 5.2377 2.33291 6.25899 2.28779C7.36231 2.23857 7.69453 2.22627 10.5 2.22627ZM10.5 0.335449C7.64942 0.335449 7.29258 0.347754 6.17285 0.396973C5.05723 0.446191 4.29023 0.62666 3.62578 0.885059C2.93262 1.15576 2.34609 1.5126 1.76367 2.09912C1.17715 2.68154 0.820313 3.26807 0.549609 3.95713C0.291211 4.62568 0.110742 5.38857 0.0615234 6.5042C0.0123047 7.62803 0 7.98486 0 10.8354C0 13.686 0.0123047 14.0429 0.0615234 15.1626C0.110742 16.2782 0.291211 17.0452 0.549609 17.7097C0.820313 18.4028 1.17715 18.9894 1.76367 19.5718C2.34609 20.1542 2.93262 20.5151 3.62168 20.7817C4.29024 21.0401 5.05313 21.2206 6.16875 21.2698C7.28848 21.319 7.64531 21.3313 10.4959 21.3313C13.3465 21.3313 13.7033 21.319 14.823 21.2698C15.9387 21.2206 16.7057 21.0401 17.3701 20.7817C18.0592 20.5151 18.6457 20.1542 19.2281 19.5718C19.8105 18.9894 20.1715 18.4028 20.4381 17.7138C20.6965 17.0452 20.877 16.2823 20.9262 15.1667C20.9754 14.047 20.9877 13.6901 20.9877 10.8396C20.9877 7.98897 20.9754 7.63213 20.9262 6.5124C20.877 5.39678 20.6965 4.62979 20.4381 3.96533C20.1797 3.26807 19.8229 2.68154 19.2363 2.09912C18.6539 1.5167 18.0674 1.15576 17.3783 0.88916C16.7098 0.630762 15.9469 0.450293 14.8313 0.401074C13.7074 0.347754 13.3506 0.335449 10.5 0.335449Z" fill="#808080" />
    <path d="M10.499 5.44189C7.52129 5.44189 5.10547 7.85772 5.10547 10.8354C5.10547 13.8132 7.52129 16.229 10.499 16.229C13.4768 16.229 15.8926 13.8132 15.8926 10.8354C15.8926 7.85772 13.4768 5.44189 10.499 5.44189ZM10.499 14.3341C8.56719 14.3341 7.00039 12.7673 7.00039 10.8354C7.00039 8.90361 8.56719 7.33682 10.499 7.33682C12.4309 7.33682 13.9977 8.90361 13.9977 10.8354C13.9977 12.7673 12.4309 14.3341 10.499 14.3341Z" fill="#808080" />
    <path d="M17.366 5.22842C17.366 5.92569 16.8 6.4876 16.1068 6.4876C15.4096 6.4876 14.8477 5.92158 14.8477 5.22842C14.8477 4.53115 15.4137 3.96924 16.1068 3.96924C16.8 3.96924 17.366 4.53525 17.366 5.22842Z" fill="#808080" />
  </g>
  <defs>
    <clipPath id="clip0_3352_57478">
      <rect width="21" height="21" fill="white" transform="translate(0 0.335449)" />
    </clipPath>
  </defs>
</svg>

const discord =
  <svg width="21" height="21" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.2774 1.97139C16.9389 1.35725 15.5036 0.90477 14.0029 0.645618C13.9756 0.640617 13.9483 0.653116 13.9342 0.678115C13.7496 1.00643 13.5451 1.43474 13.402 1.77139C11.7879 1.52974 10.182 1.52974 8.60103 1.77139C8.45782 1.42726 8.24592 1.00643 8.0605 0.678115C8.04642 0.65395 8.01912 0.641451 7.99179 0.645618C6.49192 0.903942 5.05662 1.35642 3.71732 1.97139C3.70572 1.97639 3.69579 1.98473 3.68919 1.99556C0.966718 6.06287 0.220919 10.0302 0.586783 13.9484C0.588438 13.9675 0.599199 13.9859 0.614098 13.9975C2.41031 15.3166 4.15024 16.1174 5.85787 16.6482C5.8852 16.6566 5.91415 16.6466 5.93155 16.6241C6.33549 16.0725 6.69556 15.4908 7.00429 14.8791C7.02251 14.8433 7.00512 14.8008 6.96788 14.7867C6.39674 14.57 5.8529 14.3058 5.32976 14.0059C5.28838 13.9817 5.28507 13.9225 5.32314 13.8942C5.43323 13.8117 5.54334 13.7259 5.64846 13.6392C5.66748 13.6234 5.69398 13.62 5.71634 13.63C9.15312 15.1991 12.8739 15.1991 16.2701 13.63C16.2924 13.6192 16.3189 13.6225 16.3388 13.6384C16.4439 13.725 16.554 13.8117 16.6649 13.8942C16.703 13.9225 16.7005 13.9817 16.6591 14.0059C16.136 14.3117 15.5922 14.57 15.0202 14.7858C14.983 14.8 14.9664 14.8433 14.9846 14.8791C15.3 15.49 15.66 16.0716 16.0565 16.6232C16.0731 16.6466 16.1029 16.6566 16.1302 16.6482C17.8461 16.1174 19.586 15.3166 21.3823 13.9975C21.398 13.9859 21.4079 13.9684 21.4096 13.9492C21.8474 9.41938 20.6762 5.48457 18.3047 1.99639C18.2989 1.98473 18.289 1.97639 18.2774 1.97139ZM7.51752 11.5626C6.48281 11.5626 5.63024 10.6127 5.63024 9.44606C5.63024 8.27944 6.46628 7.3295 7.51752 7.3295C8.57701 7.3295 9.42133 8.28778 9.40477 9.44606C9.40477 10.6127 8.56873 11.5626 7.51752 11.5626ZM14.4954 11.5626C13.4607 11.5626 12.6082 10.6127 12.6082 9.44606C12.6082 8.27944 13.4442 7.3295 14.4954 7.3295C15.5549 7.3295 16.3992 8.28778 16.3827 9.44606C16.3827 10.6127 15.5549 11.5626 14.4954 11.5626Z" fill="#808080" />
  </svg>


const instagram = <svg width="21" height="21" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_3352_57478)">
    <path d="M10.5 2.22627C13.3055 2.22627 13.6377 2.23857 14.741 2.28779C15.7664 2.33291 16.3201 2.50518 16.6893 2.64873C17.1773 2.8374 17.5301 3.06709 17.8951 3.43213C18.2643 3.80127 18.4898 4.1499 18.6785 4.63799C18.8221 5.00713 18.9943 5.56494 19.0395 6.58623C19.0887 7.69365 19.101 8.02588 19.101 10.8272C19.101 13.6327 19.0887 13.9649 19.0395 15.0683C18.9943 16.0937 18.8221 16.6474 18.6785 17.0165C18.4898 17.5046 18.2602 17.8573 17.8951 18.2224C17.526 18.5915 17.1773 18.8171 16.6893 19.0058C16.3201 19.1493 15.7623 19.3216 14.741 19.3667C13.6336 19.4159 13.3014 19.4282 10.5 19.4282C7.69453 19.4282 7.36231 19.4159 6.25899 19.3667C5.23359 19.3216 4.67988 19.1493 4.31074 19.0058C3.82266 18.8171 3.46992 18.5874 3.10488 18.2224C2.73574 17.8532 2.51016 17.5046 2.32148 17.0165C2.17793 16.6474 2.00566 16.0896 1.96055 15.0683C1.91133 13.9608 1.89902 13.6286 1.89902 10.8272C1.89902 8.02178 1.91133 7.68955 1.96055 6.58623C2.00566 5.56084 2.17793 5.00713 2.32148 4.63799C2.51016 4.1499 2.73984 3.79717 3.10488 3.43213C3.47402 3.06299 3.82266 2.8374 4.31074 2.64873C4.67988 2.50518 5.2377 2.33291 6.25899 2.28779C7.36231 2.23857 7.69453 2.22627 10.5 2.22627ZM10.5 0.335449C7.64942 0.335449 7.29258 0.347754 6.17285 0.396973C5.05723 0.446191 4.29023 0.62666 3.62578 0.885059C2.93262 1.15576 2.34609 1.5126 1.76367 2.09912C1.17715 2.68154 0.820313 3.26807 0.549609 3.95713C0.291211 4.62568 0.110742 5.38857 0.0615234 6.5042C0.0123047 7.62803 0 7.98486 0 10.8354C0 13.686 0.0123047 14.0429 0.0615234 15.1626C0.110742 16.2782 0.291211 17.0452 0.549609 17.7097C0.820313 18.4028 1.17715 18.9894 1.76367 19.5718C2.34609 20.1542 2.93262 20.5151 3.62168 20.7817C4.29024 21.0401 5.05313 21.2206 6.16875 21.2698C7.28848 21.319 7.64531 21.3313 10.4959 21.3313C13.3465 21.3313 13.7033 21.319 14.823 21.2698C15.9387 21.2206 16.7057 21.0401 17.3701 20.7817C18.0592 20.5151 18.6457 20.1542 19.2281 19.5718C19.8105 18.9894 20.1715 18.4028 20.4381 17.7138C20.6965 17.0452 20.877 16.2823 20.9262 15.1667C20.9754 14.047 20.9877 13.6901 20.9877 10.8396C20.9877 7.98897 20.9754 7.63213 20.9262 6.5124C20.877 5.39678 20.6965 4.62979 20.4381 3.96533C20.1797 3.26807 19.8229 2.68154 19.2363 2.09912C18.6539 1.5167 18.0674 1.15576 17.3783 0.88916C16.7098 0.630762 15.9469 0.450293 14.8313 0.401074C13.7074 0.347754 13.3506 0.335449 10.5 0.335449Z" fill="#808080" />
    <path d="M10.499 5.44189C7.52129 5.44189 5.10547 7.85772 5.10547 10.8354C5.10547 13.8132 7.52129 16.229 10.499 16.229C13.4768 16.229 15.8926 13.8132 15.8926 10.8354C15.8926 7.85772 13.4768 5.44189 10.499 5.44189ZM10.499 14.3341C8.56719 14.3341 7.00039 12.7673 7.00039 10.8354C7.00039 8.90361 8.56719 7.33682 10.499 7.33682C12.4309 7.33682 13.9977 8.90361 13.9977 10.8354C13.9977 12.7673 12.4309 14.3341 10.499 14.3341Z" fill="#808080" />
    <path d="M17.366 5.22842C17.366 5.92569 16.8 6.4876 16.1068 6.4876C15.4096 6.4876 14.8477 5.92158 14.8477 5.22842C14.8477 4.53115 15.4137 3.96924 16.1068 3.96924C16.8 3.96924 17.366 4.53525 17.366 5.22842Z" fill="#808080" />
  </g>
  <defs>
    <clipPath id="clip0_3352_57478">
      <rect width="21" height="21" fill="white" transform="translate(0 0.335449)" />
    </clipPath>
  </defs>
</svg>



const X = <svg width="21" height="21" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.0355 0.00146484H18.9873L12.5385 7.37202L20.125 17.4017H14.1848L9.53228 11.3187L4.2087 17.4017H1.25513L8.15276 9.51805L0.875 0.00146484H6.96597L11.1715 5.56151L16.0355 0.00146484ZM14.9995 15.6349H16.6351L6.07722 1.67546H4.32203L14.9995 15.6349Z" fill="#808080" />
</svg>

const facebook = <svg width="21" height="21" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 0.335449C5.20106 0.335449 0.5 5.03651 0.5 10.8355C0.5 15.7595 3.89024 19.8915 8.46362 21.0263V14.0442H6.29852V10.8355H8.46362V9.45281C8.46362 5.87903 10.081 4.22255 13.5897 4.22255C14.255 4.22255 15.4029 4.35317 15.8724 4.48337V7.39187C15.6246 7.36583 15.1941 7.35281 14.6595 7.35281C12.9379 7.35281 12.2726 8.00507 12.2726 9.70061V10.8355H15.7023L15.1131 14.0442H12.2726V21.2586C17.4718 20.6307 21.5004 16.2039 21.5004 10.8355C21.5 5.03651 16.7989 0.335449 11 0.335449Z" fill="#808080" />
</svg>

const linkedin = <svg width="21" height="21" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_3352_57481)">
    <path d="M19.9455 0.335449H2.05039C1.19316 0.335449 0.5 1.01221 0.5 1.84893V19.8179C0.5 20.6546 1.19316 21.3354 2.05039 21.3354H19.9455C20.8027 21.3354 21.5 20.6546 21.5 19.822V1.84893C21.5 1.01221 20.8027 0.335449 19.9455 0.335449ZM6.73027 18.2306H3.61309V8.20635H6.73027V18.2306ZM5.17168 6.84053C4.1709 6.84053 3.36289 6.03252 3.36289 5.03584C3.36289 4.03916 4.1709 3.23115 5.17168 3.23115C6.16836 3.23115 6.97637 4.03916 6.97637 5.03584C6.97637 6.02842 6.16836 6.84053 5.17168 6.84053ZM18.3951 18.2306H15.282V13.3579C15.282 12.1972 15.2615 10.7001 13.6619 10.7001C12.0418 10.7001 11.7957 11.9675 11.7957 13.2759V18.2306H8.68672V8.20635H11.6727V9.57627H11.7137C12.1279 8.78877 13.1451 7.95615 14.6586 7.95615C17.8127 7.95615 18.3951 10.0315 18.3951 12.7304V18.2306Z" fill="#808080" />
  </g>
  <defs>
    <clipPath id="clip0_3352_57481">
      <rect width="21" height="21" fill="white" transform="translate(0.5 0.335449)" />
    </clipPath>
  </defs>
</svg>


