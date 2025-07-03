import Layout from '../components/Layout';
import Button from '../components/Button';
import Maincard from '../components/Maincard';
import Promises from '../components/Promises';
import Video from '../components/Video';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Customers from '../components/Customers';
import Impact from '../components/Impact';

export default () => {
  return (
    <Layout>
      <div className="Top">
        <div className="Top-bg"></div>
        <div className="container">
          <h1 className="Top-title">
            Expert Auto Repair Services in New Brunswick
          </h1>
          <Button text="MAKE AN APPOINTMENT" />
        </div>
      </div>
      <div id="about">
        <Maincard
          subject="WHO WE ARE"
          title="Your Trusted Auto Repair Shop in New Brunswick"
          text="At Ralph's Auto Repair, we've been providing quality automotive services to New Brunswick and surrounding areas since 1995. Our ASE-certified technicians use the latest diagnostic equipment to ensure your vehicle receives the best care possible. We pride ourselves on honest service, fair prices, and getting you back on the road safely."
          img="/first-cover.png"
          offLinks={{ display: 'none' }}
          bg={{
            background: 'url(/maincard-bg.png) no-repeat center center / cover',
          }}
        />
      </div>
      <Promises />
      <Video />
      <div id="services">
        <Services />
      </div>
      <div id="estimates">
        <Appointment />
      </div>
      <Maincard
        subject="GALLERY & LIVE STREAMS"
        title="See Our Team in Action"
        link1="Gallery"
        link2="Live stream: Bay 1"
        link3="Live stream: Bay 2"
        link4="Live stream: Bay 3"
        img="/gallery-pic.png"
        offText={{ display: 'none' }}
      />
      <div id="reviews">
        <Customers />
      </div>
      <Impact />
    </Layout>
  );
};
