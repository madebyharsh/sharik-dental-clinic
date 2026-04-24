import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.badge}>🦷 Trusted Dental Care — Azamgarh</div>
        <h1 className={styles.heading}>
          Bright Smiles,<br />
          <span>Trusted Care</span>
        </h1>
        <p className={styles.subtext}>
          Comprehensive dental treatments delivered with precision and compassion.
          Visit <strong>Dr. Mohd Sharik</strong> at Family Dental Care — where
          your smile is our priority.
        </p>
        <div className={styles.actions}>
          <a href="tel:+918400005628" className={styles.btnPrimary}>
            📞 Call Now
          </a>
          <a
            href="https://wa.me/918400005628?text=I want to book an appointment"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
          >
            💬 Book on WhatsApp
          </a>
        </div>
        <p className={styles.trust}>
          <span className={styles.trustDot} />
          BDS &amp; MIDA Certified &nbsp;·&nbsp; 5000+ Patients Treated
          <span className={styles.trustDot} />
        </p>
      </div>
    </section>
  );
}