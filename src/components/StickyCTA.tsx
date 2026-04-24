import styles from './StickyCTA.module.css';

export default function StickyCTA() {
  return (
    <div className={styles.bar}>
      <a href="tel:+918400005628" className={styles.btnCall}>
        📞 Call Now
      </a>
      <a
        href="https://wa.me/918400005628?text=I want to book an appointment"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnWhatsapp}
      >
        💬 WhatsApp
      </a>
    </div>
  );
}