import Title from './Title';
import Impactcard from './Impactcard';
import Button from './Button';

function Impact() {
  return (
    <section className="Impact">
      <div className="container">
        <div className="Impact-top">
          <Title
            subject="OUR IMPACT"
            title="30 Years of Trusted Service in New Brunswick"
          />
          <img src="/impact-img.png" alt="" className="Impact-top-img" />
        </div>
        <div className="Impact-middle">
          <Impactcard img="/oil.svg" title="50k+" description="Oil changes" />
          <Impactcard
            img="/transmission.svg"
            title="15k+"
            description="Transmission repairs"
          />
          <Impactcard
            img="/car-service.svg"
            title="20k+"
            description="Alignments made"
          />
          <Impactcard
            img="/engine.svg"
            title="12k+"
            description="Engines repaired"
          />
        </div>
        <div className="Impact-bottom">
          <h4 className="Impact-bottom-title">
            Trust Ralph's Auto Repair for all your automotive needs
          </h4>
          <Button text="Make an Appointment" />
        </div>
      </div>
    </section>
  );
}

export default Impact;
