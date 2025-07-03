import Link from './Link';

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="container" id="switch">
        <div className="Navigation-left">
          <Link text="Services" class="expand" href="#services" />
          <Link text="Specials" href="#specials" />
          <Link text="Estimates" href="#estimates" />
          <Link text="Reviews" href="#reviews" />
          <Link text="Shop" class="expand" href="#shop" />
          <Link text="About" href="#about" />
        </div>
      </div>
      <div className="container Navigation-container">
        <div className="Navigation-right">
          <div className="icon">
            <div className="button-icon Navigation-right-search-icon"></div>
          </div>
          <div className="shopping-cart icon">
            <div className="shopping-cart-indicator">2</div>
            <div className="button-icon Navigation-right-shopping-icon"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
