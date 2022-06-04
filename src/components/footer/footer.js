import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
<React.Fragment>
<footer id="footer">
  <div class="rounded-social-buttons">
                    <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                    
                   <Link to="/profile/">
                        <a class="social-button" href="#/profile/"><i class="fab">@Denys Holdun</i></a>
                    </Link>
                                   
                </div>
</footer>
</React.Fragment>
);

export default Footer;