function Appointment() {
  return (
    <section className="Appointment">
      <div className="container">
        <div className="Appointment-form">
          <h4 className="Appointment-form-title">Schedule Your Service</h4>
          <div className="Appointment-form-content" style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Call us to make an appointment</h2>
            <a href="tel:7323172228" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff', textDecoration: 'none' }}>
              (732) 317-2228
            </a>
            <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
              Our team is ready to help with all your auto repair needs
            </p>
          </div>
        </div>
        <div className="Appointment-text">
          <div className="Appointment-text-title">
            Expert Auto Repair Services
          </div>
          <div className="Appointment-text-count">25k+</div>
          <div className="Appointment-text-bottom">
            customers served (and counting)
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
