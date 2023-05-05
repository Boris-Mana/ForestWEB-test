function Footer({ counter }) {
    return (
        <footer className="footer">

            <nav className="footer__nav-box">
                <li><a className="footer__link" href="#">FACEBOOK</a></li>
                <li><a className="footer__link" href="#">INSTAGRAM</a></li>
                <li><a className="footer__link" href="#">TWITTER</a></li>
            </nav>
            <p className="footer__page-number">0{counter + 1}</p>
        </footer>
    );
}

export default Footer;