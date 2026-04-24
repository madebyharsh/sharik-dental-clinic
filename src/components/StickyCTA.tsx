import styles from './StickyCTA.module.css';

export default function StickyCTA() {
  return (
    <div
      className={styles.bar}
      role="complementary"
      aria-label="Quick contact options"
    >
      <a
        href="tel:+918400005628"
        className={styles.btnCall}
        aria-label="Call Family Dental Care now"
      >
        📞 Call Now
      </a>
      <a
        href="https://wa.me/918400005628?text=I want to book an appointment"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnWhatsapp}
        aria-label="Book appointment on WhatsApp"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}