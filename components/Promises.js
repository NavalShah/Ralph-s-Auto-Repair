import Title from './Title';
import Minicard from './Minicard';

function Promises() {
  return (
    <section className="Promises">
      <div className="container">
        <Title
          subject="OUR PROMISE TO YOU"
          title="Why Choose Ralph's Auto Repair"
        />
        <div className="Promises-content">
          <Minicard
            src="/giftbox.svg"
            title="Quality service. Everytime."
            text="We guarantee all our work and use only quality parts. Your satisfaction is our top priority, and we'll make it right if you're not completely satisfied."
          />
          <Minicard
            src="/certified.svg"
            title="Services by certified pros"
            text="Our ASE-certified technicians stay current with the latest automotive technology and repair techniques to provide expert service on all makes and models."
          />
          <Minicard
            src="/team.svg"
            title="Real people. Honest work."
            text="We believe in transparent pricing and honest recommendations. No hidden fees, no unnecessary repairs - just straightforward service you can trust."
          />
        </div>
      </div>
    </section>
  );
}
export default Promises;
