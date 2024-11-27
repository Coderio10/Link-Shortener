import footerLogo from '../assets/footerlogo.svg' 
import pinterest from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'

function footer() {
    return (
        <>
            <section className='footer'>
                <div>
                    <img src={footerLogo} alt="footer Logo" />
                </div>
                <div className='links'>
                    <div>
                        <h4>Features</h4>
                        <ul>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <ul>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <img className='fa' src={facebook} alt="facebook" />
                        <img className='fa' src={twitter} alt="twitter" />
                        <img className='fa' src={pinterest} alt="pinterest" />
                        <img className='fa' src={instagram} alt="instagram" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default footer