import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.label}>Get In Touch</span>
          <h2 className={styles.heading}>Visit Us Today</h2>
          <p className={styles.subtext}>
            We are here to help. Walk in or call ahead to schedule your appointment.
          </p>
        </div>

        <div className={styles.card}>

          <div className={styles.infoBlock}>
            <span className={styles.infoIcon}>🏥</span>
            <div>
              <p className={styles.infoTitle}>Clinic</p>
              <p className={styles.infoValue}>Family Dental Care</p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.infoBlock}>
            <span className={styles.infoIcon}>📍</span>
            <div>
              <p className={styles.infoTitle}>Address</p>
              <p className={styles.infoValue}>
                Beside Islamia Hospital, Badi Arjenti,<br />
                Mubarakpur, Azamgarh
              </p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.infoBlock}>
            <span className={styles.infoIcon}>📞</span>
            <div>
              <p className={styles.infoTitle}>Phone</p>
              <p className={styles.infoValue}>+91 84000 05628</p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.infoBlock}>
            <span className={styles.infoIcon}>🕐</span>
            <div>
              <p className={styles.infoTitle}>Hours</p>
              <p className={styles.infoValue}>Mon – Sat &nbsp;·&nbsp; 10:00 AM – 8:00 PM</p>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="tel:+918400005628" className={styles.btnCall}>
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918400005628?text=I want to book an appointment"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
            >
              💬 WhatsApp Us
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}