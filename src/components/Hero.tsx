import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-heading">
      <div className={styles.container}>
        <div className={styles.badge} role="note">
          🦷 Trusted Dental Care — Azamgarh
        </div>
        <h1 className={styles.heading} id="hero-heading">
          Bright Smiles,<br />
          <span>Trusted Care</span>
        </h1>
        <p className={styles.subtext}>
          Comprehensive dental treatments delivered with precision and compassion.
          Visit <strong>Dr. Mohd Sharik</strong> at Family Dental Care — where
          your smile is our priority.
        </p>
        <div className={styles.actions} role="group" aria-label="Contact options">
          <a
            href="tel:+918400005628"
            className={styles.btnPrimary}
            aria-label="Call Family Dental Care now"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/918400005628?text=I want to book an appointment"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
            aria-label="Book appointment via WhatsApp"
          >
            💬 Book on WhatsApp
          </a>
        </div>
        <p className={styles.trust} aria-label="Doctor credentials summary">
          <span className={styles.trustDot} aria-hidden="true" />
          BDS &amp; MIDA Certified &nbsp;·&nbsp; 5000+ Patients Treated
          <span className={styles.trustDot} aria-hidden="true" />
        </p>
      </div>
    </section>
  );
}