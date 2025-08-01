import Button from './Button';

export default () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header-left">
          <div className="Header-left-logo">
            <a href="">
              <div className="logo"></div>
            </a>
          </div>
        </div>
        {/* <div className="icon Header-switch" onClick={clickThat}>
          <div className="button-icon Header-switch-icon"></div>
        </div> */}
        <div className="Header-right">
          <div className="Header-right-section" style={{ minWidth: '280px' }}>
            <img className="icon" src="/time.svg" alt="" />
            <div className="text">
              SERVICE HOURS
              <br />
              Mon - Fri: 9am - 5pm | Sat: 9am - 3pm
            </div>
          </div>
          <div className="Header-right-section" style={{ minWidth: '200px' }}>
            <img className="icon" src="/phone.svg" alt="" />
            <div className="text">
              CALL US
              <br />
              +1 (732) 317-2228
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

function clickThat() {
  var e = document.getElementById('switch');
  e.classList.toggle('switch');
}
