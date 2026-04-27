import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
      <div className={styles.container}>

        <header className={styles.header}>
          <span className={styles.label} role="note">Get In Touch</span>
          <h2 className={styles.heading} id="contact-heading">Visit Us Today</h2>
          <p className={styles.subtext}>
            We are here to help. Walk in or call ahead to schedule your appointment.
          </p>
        </header>

        <address className={styles.card} style={{ fontStyle: 'normal' }}>

          <div className={styles.infoBlock}>
            <div className={styles.infoIconWrap} aria-hidden="true">🏥</div>
            <div>
              <p className={styles.infoTitle}>Clinic</p>
              <p className={styles.infoValue}>Family Dental Care</p>
            </div>
          </div>

          <div className={styles.divider} role="separator" />

          <div className={styles.infoBlock}>
            <div className={styles.infoIconWrap} aria-hidden="true">📍</div>
            <div>
              <p className={styles.infoTitle}>Address</p>
              <p className={styles.infoValue}>
                Beside Islamia Hospital, Badi Arjenti,<br />
                Mubarakpur, Azamgarh, Uttar Pradesh
              </p>
            </div>
          </div>

          <div className={styles.divider} role="separator" />

          <div className={styles.infoBlock}>
            <div className={styles.infoIconWrap} aria-hidden="true">📞</div>
            <div>
              <p className={styles.infoTitle}>Phone</p>
              <p className={styles.infoValue}>
                <a
                  href="tel:+918400005628"
                  aria-label="Call us at +91 84000 05628"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  +91 84000 05628
                </a>
              </p>
            </div>
          </div>

          <div className={styles.divider} role="separator" />

          <div className={styles.infoBlock}>
            <div className={styles.infoIconWrap} aria-hidden="true">🕐</div>
            <div>
              <p className={styles.infoTitle}>Hours</p>
              <p className={styles.infoValue}>
                <time dateTime="Mo-Sa 10:00-20:00">
                  Opening hrs &nbsp;·&nbsp; 10:00 AM – 7:00 PM
                  <br/>
                  <b><i>CLOSED ON : TUESDAYS</i></b>
                </time>
              </p>
            </div>
          </div>

          <div className={styles.actions} role="group" aria-label="Contact options">
            <a
              href="tel:+918400005628"
              className={styles.btnCall}
              aria-label="Call Family Dental Care"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918400005628?text=I want to book an appointment"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
              aria-label="Message us on WhatsApp to book an appointment"
            >
              💬 WhatsApp Us
            </a>
          </div>

        </address>

      </div>
    </section>
  );
}