import React, { Component } from 'react';
import '../App.css';
import Bootstrap from 'react-bootstrap';
import '../images/galvanize-G.svg';

const Footer = () => <div>
  <footer className="bootstrap-style footer-legacy clearfix -redesign">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table width="100%" cellPadding="0" cellSpacing="0" className="table">
            <tbody>
              <tr>
                <td width="55" className="hidden-sm hidden-xs td">
                  <a href="http://www.galvanize.com" target="_blank" rel="noopener noreferrer">
                    <img id="logo" src="galvanize-G.svg" className="galvanizeG" alt="Galvanize G Logo" responsive/>
                  </a>
                </td>
                <td width="20" className="hidden-sm hidden-xs"></td>
                  <td className="td">
                  <div className="footer-nav">
                    <ul id="menu-footer">
                    <li id="menu-items-9432" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9432">
                      <a title="About" href="http://www.galvanize.com/about/" target="_blank" rel="noopener noreferrer">ABOUT</a>
                    </li>
                    <li id="menu-item-281" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-281">
                      <a title="FAQ" href="http://www.galvanize.com/faq/" target="_blank" rel="noopener noreferrer">FAQ</a>
                    </li>
                    <li id="menu-item-2294" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2294">
                      <a title="Press" href="http://www.galvanize.com/press/" target="_blank" rel="noopener noreferrer">PRESS</a>
                    </li>
                    <li id="menu-item-403948" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-402948">
                      <a title="Careers" href="http://www.galvanize.com/careers/" target="_blank" rel="noopener noreferrer">CAREERS</a>
                    </li>
                    <li id="menu-item-9502" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9502">
                      <a title="Login" href="http://www.members.galvanize.com" target="_blank" rel="noopener noreferrer">LOGIN</a>
                    </li>
                  </ul>
                </div>
                <div className="address">
                  <address>
                    <strong>Galvanize, Inc.</strong>
                    <br></br>
                  </address>
{/* THIS IS WHERE I LEFT OFF */}
                      <span>
                      <div id="rightSide" className="right side">
                        <span>
                          <a id="hireOur">Hire Our</a><a className="techTalent" href="https://talent.galvanize.com" target="_blank" rel="noopener noreferrer">
                            Tech Talent</a> </span>
                        <li className="socialIcons">
                          <a href="https://twitter.com/galvanize" target="_blank" rel="noopener noreferrer">
                            <i id="icons" className="fab fa-twitter fa-fw"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://www.facebook.com/GalvanizeHQ" target="_blank" rel="noopener noreferrer">
                            <i id="icons" className="fab fa-facebook-f fa-fw"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://instagram.com/GalvanizeHQ" target="_blank" rel="noopener noreferrer">
                            <i id="icons" className="fab fa-instagram fa-fw"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://www.linkedin.com/company/galvanize-it" target="_blank" rel="noopener noreferrer">
                            <i id="icons" className="fab fa-linkedin-in fa-fw"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://plus.google.com/104456246601890468626/posts" target="_blank" rel="noopener noreferrer">
                            <i id="icons" className="fab fa-google-plus-g fa-fw"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://www.youtube.com/channel/UC6CFuXHLJQ_30gOxUTEFj_g" target="_blank" rel="noopener noreferrer">
                            <i id="icons" className="fab fa-youtube fa-fw"></i>
                          </a>
                        </li>
                      </div>
                    </span>
                    <li></li>
                  </div>
                  <div>
                    <p></p>
                    <span>
                    <div className="address">
                      <address>
                        <strong>Galvanize, Inc.</strong>
                        <br></br>
                        1062 Delaware Street
                        <br></br>
                        Denver, CO 80204
                      </address>
                    </div>
                  </span>
                </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </footer>
</div>

  export default Footer;
