import Title from './Title';
import Customercard from './Customercard';

function Customers() {
  return (
    <section className="Customers">
      <img src="/gears-gallery-bg.png" className="Customers-bg"></img>
      <div className="container">
        <Title
          subject="OUR CUSTOMERS"
          title="What Our Customers Say About Us"
        />
        <div className="Customers-container">
          <Customercard
            text="Ralph's Auto Repair has been taking care of my family's vehicles for over 10 years. They're honest, reliable, and always explain what needs to be done. I wouldn't trust my car to anyone else!"
            img="/customer-1.png"
            name="Michael Rodriguez"
          />
          <Customercard
            text="I had an emergency breakdown and Ralph's team got me in the same day. They diagnosed the problem quickly, gave me a fair quote, and had me back on the road by the afternoon. Excellent service!"
            img="/customer-2.png"
            name="Sarah Chen"
          />
        </div>
      </div>
    </section>
  );
}

export default Customers;