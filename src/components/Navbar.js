import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../components/logo1.jpg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <span>Loja 1</span>
            <img src={logo1} alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio da Pagina
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Mais Produtos
              </Link>
            </li>

            <li>
              <a
                href="https://www.google.com.br/maps/place/R.+Palmeiras,+1070+-+Planalto+Ayrton+Senna,+Fortaleza+-+CE,+60766-410/@-3.838182,-38.5763793,15z/data=!4m5!3m4!1s0x7c751f78c980ed5:0xf6ebeb487a5a8421!8m2!3d-3.838182!4d-38.567646"
                className="nav-links-mobil"
                // onClick={closeMobileMenu}
              >
                Localização
              </a>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Localização</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
