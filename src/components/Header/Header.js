import basket_1 from "../../images/basket_1.svg";

function Header() {
  return (
    
        <header className="header">
          <nav className="header__nav">
            <li><a className="header__link header__link_home" href="#">Home</a></li>
            <li><a className="header__link" href="#">Style Hair</a></li>
            <li><a className="header__link" href="#">Models</a></li>
            <li><a className="header__link" href="#">Shop</a></li>
            <li><a className="header__link" href="#">Contact</a></li>
          </nav>
          <img className="header__basket" src={basket_1} />
        </header>      
    
  );
}

export default Header;
