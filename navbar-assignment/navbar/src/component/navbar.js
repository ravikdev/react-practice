import React from 'react'
import { AiFillFacebook, FaInstagram, FaYoutubeSquare  } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './navbar.css';
const Navbar = () => {
  return (
    <>
       <div className="main">
            <div className="navbar">
                <div className="logo">
                    <a href="https://www.atlassian.com/">
                        <img className="logo-image"
                            src='https://th.bing.com/th/id/OIP.LFiIrZBxC3K_pf4-D92gKwAAAA?pid=ImgDet&rs=1' />
                    </a>
                </div>

                <ul className="navbar-options">
                    <li>Products &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="blue"
                            class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </li>
                    <li>For Teams &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="blue"
                            class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </li>
                    <li>
                        Support &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" fill="blue"
                            class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </li>
                </ul>


                <button className="button free">Try Free</button>

                <p className="text">Buy Now</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    className="bi bi-search" viewBox="0 0 16 16" style={{
                        marginTop: "-48px",
                        marginLeft: "2rem", cursor: "pointer"
                    }}>
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>

                <div className="vertical-line"></div>

                <p className="text login">Sign In</p>

            </div>
        </div>
    </>
  );
};


export default Navbar