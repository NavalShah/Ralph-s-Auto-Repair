import Link from './Link';

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="container" id="switch">
        <div className="Navigation-left">
          <Link text="Services" class="expand" href="#services" />

          <Link text="Estimates" href="#estimates" />
          <Link text="Reviews" href="#reviews" />

          <Link text="About" href="#about" />
        </div>
      </div>
      <div className="container Navigation-container">
        <div className="Navigation-right">

        </div>
      </div>
    </nav>
  );
}

export default Navigation;
