import Title from './Title';
import Servicecard from './Servicecard';
import Button from './Button';

function Services() {
  return (
    <section className="Services">
      <div className="container">
        <Title
          subject="Our Services"
          title="Comprehensive Auto Care Solutions"
        />
        <div className="Services-content">
          <Servicecard
            src="multi-point.svg"
            title="Multi Point Inspections"
            text="Our thorough multi-point inspections help identify potential issues before they become major problems, saving you time and money."
          />
          <Servicecard
            src="auto-repair.svg"
            title="Auto Repair"
            text="From engine diagnostics to transmission repair, our ASE-certified technicians handle all major and minor repairs with precision and care."
            shadow="shadow"
          />
          <Servicecard
            src="auto-maintenance.svg"
            title="Auto Maintenance"
            text="Regular maintenance is key to vehicle longevity. We offer oil changes, filter replacements, fluid checks, and scheduled maintenance services."
          />
          <Servicecard
            src="tires.svg"
            title="Tires"
            text="We provide tire sales, installation, rotation, balancing, and alignment services to ensure your vehicle handles safely in all conditions."
          />
          <Servicecard
            src="service-warranty.svg"
            title="Service Warranty"
            text="We stand behind our work with comprehensive warranties on parts and labor, giving you peace of mind with every service."
          />
          <Servicecard
            src="shop-online.svg"
            title="Shop Online"
            text="Browse and purchase auto parts and access service specials through our convenient online portal. Call us at (732) 317-2228 to schedule service."
          />
          <Button text="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default Services;
